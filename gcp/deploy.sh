#!/bin/bash

# RevBridge Waitlist - GCP Deployment Script
# Project: chromatic-timer-461913-q9

set -e

PROJECT_ID="chromatic-timer-461913-q9"
REGION="us-central1"
FUNCTION_NAME="waitlist-signup"

echo "🚀 RevBridge Waitlist Deployment"
echo "================================"

# Set project
echo "📋 Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# Enable required APIs
echo "🔌 Enabling required APIs..."
gcloud services enable \
  cloudfunctions.googleapis.com \
  bigquery.googleapis.com \
  cloudbuild.googleapis.com \
  run.googleapis.com

# Create BigQuery dataset (ignore if exists)
echo "📊 Creating BigQuery dataset..."
bq mk --dataset $PROJECT_ID:waitlist 2>/dev/null || echo "Dataset already exists"

# Create BigQuery table
echo "📋 Creating BigQuery table..."
bq query --use_legacy_sql=false "
CREATE TABLE IF NOT EXISTS \`$PROJECT_ID.waitlist.signups\` (
  id STRING NOT NULL,
  name STRING NOT NULL,
  email STRING NOT NULL,
  company STRING NOT NULL,
  budget STRING NOT NULL,
  consent BOOL NOT NULL,
  created_at TIMESTAMP NOT NULL,
  source STRING DEFAULT 'website'
)"

# Deploy Cloud Function
echo "☁️ Deploying Cloud Function..."
gcloud functions deploy $FUNCTION_NAME \
  --gen2 \
  --runtime=python311 \
  --region=$REGION \
  --source=./waitlist-function \
  --entry-point=waitlist_signup \
  --trigger-http \
  --allow-unauthenticated \
  --memory=256MB \
  --timeout=60s

# Get function URL
FUNCTION_URL=$(gcloud functions describe $FUNCTION_NAME --region=$REGION --format="value(serviceConfig.uri)")

echo ""
echo "✅ Deployment complete!"
echo "================================"
echo "Function URL: $FUNCTION_URL"
echo ""
echo "Update your WaitlistModal.tsx with this URL."
