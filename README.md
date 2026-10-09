# Devasena — Personal Portfolio

A responsive portfolio built with Python, Flask, SQLite, HTML, CSS, and JavaScript. It is based on the resume provided and includes public portfolio pages, login/signup, a protected user dashboard, and a resume download route.

## Run on Windows

1. Extract the ZIP and open the `devasena_portfolio` folder in VS Code.
2. Open a terminal in that folder.
3. Create and activate a virtual environment:

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

   If PowerShell blocks activation, use Command Prompt and run `.venv\Scripts\activate.bat`.

4. Install dependencies:

   ```powershell
   pip install -r requirements.txt
   ```

5. Start the server:

   ```powershell
   python app.py
   ```

6. Open `http://127.0.0.1:5000` in your browser.

The SQLite database is created automatically. Use **Create account** to test signup and login.

## Resume content included

- CSE (AI & ML), Sri Venkateswara College of Engineering and Technology, 2021–2025, GPA 8.58
- Python, JavaScript, SQL, TypeScript, Flask, Django, Node.js, Express, React, databases and tools listed in the resume
- Facial Access for Banking Transactions
- Employee Management System
- Workato Foundations Level 1 and Level 2 certifications (Workato Academy)
- EXCELR SQL and Python certifications
- Current experience: Backend Developer Intern at Smartkeen Tech; learning and working with Workato

## Customize

Edit `templates/index.html` to update any portfolio text or project details. The resume PDF is stored at `static/files/Devasena_Resume.pdf` and served from `/resume`.

## Before public deployment

This is a local development starter. Set a strong `SECRET_KEY` environment variable, disable debug mode, use a production WSGI server and HTTPS, and add CSRF protection/rate limiting before deploying publicly. The fallback key in `app.py` is for local development only.


## Profile and GitHub

The homepage uses the provided profile photo at `static/files/devasena-profile.jpeg` and links to `https://github.com/Devi-kothacheruvu`.
