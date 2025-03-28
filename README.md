# 💱 Currency Converter Web App

A simple Flask-based currency converter that fetches live exchange rates from the Czech National Bank (CNB) and allows users to convert between 30+ currencies through a clean web interface.

---

## 🚀 Features
- Fetches **live exchange rates** from CNB.
- Supports **30+ currencies** including EUR, USD, CZK, GBP, etc.
- Built with **Flask (Python backend)** and **Vanilla JavaScript frontend**.
- Smart UX:
  - Swap currencies
  - Live result without reloading
  - Input validation
  - Last selected currencies stored in localStorage

---

🌍 Exchange Rate Source

This app uses exchange rates published by:

Czech National Bank (CNB)

The official API is in plain text and updated daily.

---

## 🗂 Project Structure
```
	project-root/
	│
	├── src/                    # Core Python logic
	│   ├── app.py              # Main Flask app
	│   └── converter.py        # Currency conversion logic
	│
	├── templates/              # HTML templates (Jinja2)
	│   └── index.html
	│
	├── static/                 # Frontend assets (CSS, JS)
	│   ├── style.css
	│   └── index.js
	│
	├── requirements.txt        # Python dependencies
	└── README.md               # Project documentation
```
---

## 📦 Requirements
- Flask
- requests
- Python 3.8+
- pip (Python package installer) 

    or 

- poetry (Python dependency manager)

---

## ⚙️ Setup Instructions

1. **Clone this repository**

```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```

2. **Create a virtual environment (optional but recommended)**
```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the app**
```bash
cd src
python app.py
```

5. **Visit the app**
```
http://127.0.0.1:5001
```

## 📸 Screenshots

 (add later)


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author - Michal Puškáč

This projects are part of my portfolio, showcasing the basic python skills and concepts. This application is for educational purposes.
Consider additional security measures if you plan to use it in a production environment.
If you have any questions, feedback, or would like to collaborate, feel free to get in touch!

---
- **LinkedIn**: [LinkedIn](linkedin.com/in/michal-puškáč-94b925179)
- **GitHub**: [GitHub](github.com/michalpuskac)

---