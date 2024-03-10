from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/user/")
def login():
    return render_template("user-login.html")

@app.route("/login/", methods=["POST","GET"])
def home():
    # firstname = request.args.get('firstname') #FOR GET
    firstname = request.form.get('firstname') #FOR POST
    return f"you {firstname}"
    # return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
