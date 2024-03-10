from flask import *

app = Flask(__name__)

@app.route('/login/')
def home():
    if request.method == 'GET':
        username = request.args.get('username')

    return f"Login Page {username}"

if __name__ == '__main__':
    app.run(debug=True)