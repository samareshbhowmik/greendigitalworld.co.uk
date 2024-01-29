from flask import Flask, request, redirect, url_for, render_template
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

def establish_connection():
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='ranirani',
            database='gdw_contactus'
        )
        return conn
    except Error as e:
        print("Error while connecting to MySQL", e)
        return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    conn = establish_connection()
    if conn is None:
        return 'Failed to submit contact information.'

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO contact_info (name, email, message) VALUES (%s, %s, %s)", (name, email, message))
        conn.commit()

        return 'Contact information submitted successfully!'
    except Error as e:
        print("Error while executing SQL query", e)
        return 'Failed to submit contact information.'
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5001)
