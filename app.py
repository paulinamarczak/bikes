from flask import Flask, render_template, send_from_directory, jsonify
import os

app = Flask(__name__)

# Configuration
FILE_DIRECTORY = 'files'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/files')
def list_files():
    files = os.listdir(FILE_DIRECTORY)
    return jsonify(files)

@app.route('/file/<filename>')
def get_file(filename):
    return send_from_directory(FILE_DIRECTORY, filename)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
