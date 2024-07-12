from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tiff/<filename>')
def serve_tiff(filename):
    return send_from_directory(os.path.join(app.root_path, 'static', 'tiffs'), filename)

if __name__ == '__main__':
    app.run(debug=True)
