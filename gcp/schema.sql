-- BigQuery Schema for RevBridge Waitlist
-- Project: chromatic-timer-461913-q9
-- Dataset: waitlist
-- Table: signups

-- Step 1: Create dataset (run in terminal)
-- bq mk --dataset chromatic-timer-461913-q9:waitlist

-- Step 2: Create table (run this SQL in BigQuery Console)
CREATE TABLE IF NOT EXISTS `chromatic-timer-461913-q9.waitlist.signups` (
  id STRING NOT NULL,
  name STRING NOT NULL,
  email STRING NOT NULL,
  company STRING NOT NULL,
  budget STRING NOT NULL,
  consent BOOL NOT NULL,
  created_at TIMESTAMP NOT NULL,
  source STRING DEFAULT 'website'
);
