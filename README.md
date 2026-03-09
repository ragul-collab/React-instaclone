# Instagram Clone 📸

A simple Instagram clone built using **React** and **JSON Server**.
This project simulates core Instagram features such as **posts, likes, comments, and user profiles** using a **local JSON database**.

---

## 🚀 Features

* 🏠 Instagram-style **home feed**
* 👤 **User profile** display
* ❤️ **Like counter**
* 💬 **Comments section**
* 📸 **Post images with captions**
* 📂 Data fetched from **local JSON API**
* ⚡ Built with **modern React components**

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6)**
* **JSON Server**
* **HTML5**
* **CSS3**

---

## 📁 Project Structure

```
instagram-clone/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Post.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   └── Stories.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```
git clone https://github.com/your-username/instagram-clone.git
```

2️⃣ Navigate to the project folder

```
cd instagram-clone
```

3️⃣ Install dependencies

```
npm install
```

4️⃣ Start the React development server

```
npm run dev
```

5️⃣ Start JSON Server

```
npx json-server --watch db.json --port 3001
```

---

## 🔗 API Endpoints

```
GET    /posts
GET    /users
GET    /stories
POST   /posts
PATCH  /posts/:id
```

These endpoints simulate a backend using **JSON Server**.

---

## 🎯 Learning Goals

* Practice **React component structure**
* Understand **API data fetching**
* Work with **local JSON as a backend**
* Build a **social media style UI**

---

## 📌 Future Improvements

* Add **authentication**
* Implement **real-time likes and comments**
* Connect to a **real backend (Node.js / Firebase)**
* Add **responsive mobile UI**

---

## 👨‍💻 Author

Developed as a learning project to understand **React and API integration**.

---

