# 💸 Split Expense App

A full-stack MERN application to split expenses among participants, track who owes whom, and simplify settlements — built with MongoDB, Express, React (Vite), Node.js, and custom CSS.

---

## 🌐 Live Demo

- 🖥️ **Frontend:** [Split Expense App (Vercel)](https://split-app-ruddy.vercel.app/ )
- ⚙️ **Backend API:** [Render API Endpoint](https://split-expense-backend.onrender.com) 

---

## 📦 GitHub Repo

- [Source Code on GitHub](https://github.com/Sachin3578/Split-App)

---

## 🧪 Postman Collection

- [Postman Gist (v2.1 Collection)](https://sachingornar.postman.co/workspace/fdc943ea-4145-41be8ade-64c0c52b62df/collection/45948353-ad813fdb-88dd-4c18-a5474389b2e96d6a?action=share&source=collection_link&creator=45948353)

---

## ✨ Features

- ➕ Add expenses with participants
- 📋 View all expense history
- 💰 Calculate net balances
- 🤝 Auto-generate settlement suggestions
- 🎨 Clean, responsive UI using pure CSS

---

## 🧱 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React (Vite), CSS      |
| Backend    | Node.js, Express       |
| Database   | MongoDB Atlas          |
| Hosting    | Vercel (frontend), Render (backend) |
| Tools      | Postman, Git, GitHub   |

---

## 📁 Project Structure


---

## 🧪 API Endpoints

| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| POST   | `/expenses`        | Add a new expense             |
| GET    | `/expenses`        | Get all expenses              |
| PUT    | `/expenses/:id`    | Update an expense             |
| DELETE | `/expenses/:id`    | Delete an expense             |
| GET    | `/people`          | List all participants         |
| GET    | `/balances`        | Get net balances              |
| GET    | `/settlements`     | Get suggested settlements     |

---

## 🚀 Local Setup

```bash
# Clone repo
git clone https://github.com/Sachin3578/Split-App.git

# Backend
cd server
npm install
# Add .env with MONGO_URI
npm run dev

# Frontend
cd ../client
npm install
npm run dev



---

## ✅ How to Use

1. Replace:
   - https://your-vercel-url.vercel.app with your actual deployed frontend
   - `https://split-expense-backend.onrender.comhttps://split-expense-backend.onrender.com` with your live backend
   - Postman Gist link: 
2. Paste this as your `README.md` in the root folder
3. Commit & push:

```bash
git add README.md
git commit -m "Add final README with live links"
git push origin main
