from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/reserve", methods=["POST"])
def reserve():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()

    if not name:
        return jsonify({"ok": False, "message": "Please enter your name."}), 400

    return jsonify({
        "ok": True,
        "message": f"Thank you, {name}! Your reservation request has been received."
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
