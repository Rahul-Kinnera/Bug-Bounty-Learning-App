
from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/sqli", methods=["GET", "POST"])
def sqli():
    conn = sqlite3.connect("db.sqlite3")
    cursor = conn.cursor()
    query_result = ""

    if request.method == "POST":
        username = request.form.get("username")
        try:
            cursor.execute(f"SELECT * FROM users WHERE username = '{username}'")
            rows = cursor.fetchall()
            if rows:
                query_result = f"User found: {rows}"
            else:
                query_result = "No user found."
        except Exception as e:
            query_result = f"Error: {str(e)}"

    conn.close()
    return render_template("index.html", result=query_result)

if __name__ == "__main__":
    app.run(debug=True)
