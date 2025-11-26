import functions_framework
from google.cloud import bigquery
from flask import jsonify
import uuid
from datetime import datetime

PROJECT_ID = "chromatic-timer-461913-q9"
DATASET_ID = "waitlist"
TABLE_ID = "signups"


@functions_framework.http
def waitlist_signup(request):
    """HTTP Cloud Function to handle waitlist signups and store in BigQuery."""

    # CORS preflight request
    if request.method == "OPTIONS":
        headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "3600",
        }
        return ("", 204, headers)

    # CORS headers for actual request
    headers = {"Access-Control-Allow-Origin": "*"}

    # Only allow POST
    if request.method != "POST":
        return (jsonify({"error": "Method not allowed"}), 405, headers)

    try:
        data = request.get_json()

        if not data:
            return (jsonify({"error": "No data provided"}), 400, headers)

        # Validate required fields
        required_fields = ["name", "email", "company", "budget", "consent"]
        for field in required_fields:
            if field not in data:
                return (jsonify({"error": f"Missing required field: {field}"}), 400, headers)

        # Validate email format (basic check)
        email = data["email"]
        if "@" not in email or "." not in email:
            return (jsonify({"error": "Invalid email format"}), 400, headers)

        # Create BigQuery client
        client = bigquery.Client()
        table_ref = f"{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}"

        # Prepare row data
        row = {
            "id": str(uuid.uuid4()),
            "name": data["name"].strip(),
            "email": email.lower().strip(),
            "company": data["company"].strip(),
            "budget": data["budget"],
            "consent": bool(data["consent"]),
            "created_at": datetime.utcnow().isoformat(),
            "source": data.get("source", "website"),
        }

        # Insert into BigQuery
        errors = client.insert_rows_json(table_ref, [row])

        if errors:
            print(f"BigQuery insert errors: {errors}")
            return (jsonify({"error": "Failed to save data", "details": str(errors)}), 500, headers)

        return (jsonify({"success": True, "id": row["id"]}), 200, headers)

    except Exception as e:
        print(f"Error processing request: {str(e)}")
        return (jsonify({"error": "Internal server error"}), 500, headers)
