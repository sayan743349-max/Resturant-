# Maison Dorée Web

This is the browser version of the previous `Resturant.py` CustomTkinter app.

## Run on your computer

1. Install Python.
2. Open a terminal in this folder.
3. Install Flask:

```bash
pip install -r requirements.txt
```

4. Start the website:

```bash
python app.py
```

5. Open:

http://127.0.0.1:5000

## Share with other people

For a public link, upload this project to a Python web host such as Render or another Flask-compatible hosting service. The start command is:

```bash
python app.py
```

The host will give you a public HTTPS URL that you can send to anyone.

## Important

The reservation form in this demo confirms the request in the browser/backend response. It does not yet save reservations to a database or send email.


## Free hosting deployment

For a Flask host that uses Gunicorn:
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`

The website entry point is `app.py`, and the Flask application object is `app`.
