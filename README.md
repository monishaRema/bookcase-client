<img src="./src/assets/logo.png" width="120">

# Book Case

A modern web application that allows users to catalog books they've read, are currently reading, or want to read. With built-in reviews, progress tracking, and a social touch, **Virtual Bookshelf** helps readers stay organized and discover new books through the community.

## 🌐 Live Demo

[🔗 Visit the Live Site](https://your-live-url.com) <!-- Replace with actual deployed URL -->

---

## 📝 Purpose

**Virtual Bookshelf** solves the problem of scattered book lists and reading logs by offering a centralized, interactive, and visually appealing platform. Whether you're a casual reader or a dedicated bibliophile, this app keeps your reading journey well-tracked and engaging.

---

## 🚀 Key Features

- 📖 **Add & Organize Books**  
  Easily add books with title, author, cover, and reading status: **Read**, **Reading**, or **Want to Read**.

- ✍️ **Write & Share Reviews**  
  Review books you've completed and browse reviews from other users.

- 👍 **Upvote Popular Books**  
  Discover trending books by seeing what the community loves.

- 📊 **Visualize Reading Progress**  
  Beautiful charts to track your reading habits over time.

- 🔐 **User Authentication**  
  Secure login using email/password or Google with Firebase Auth.

- 🎨 **Smooth UI/UX**  
  Clean, responsive interface using Tailwind CSS and Framer Motion.

---

## 🧰 Tech Stack

### Frontend
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Animations
- **Recharts** – Data visualizations (reading progress)
- **React Router DOM** – Navigation
- **React Icons** – Iconography
- **React Toastify** – Notifications
- **SweetAlert2** – Alert modals
- **Lottie React** – Animations
- **React Tooltip** – Tooltips
- **React Slick** – Carousels

### Backend
- **Node.js** + **Express** – RESTful API server
- **MongoDB** – NoSQL database

### Authentication
- **Firebase** – Email/password + Google login

### Deployment
- **Frontend** – Firebase Hosting 
- **Backend** – Vercel 
---

## Folder Structure 
<pre>
b11a11-client-side-monishaRema/
├── node_modules/
├── public/
├── src/
│ ├── assets/ # Images, fonts, and static assets
│ ├── Components/ # Reusable UI components
│ ├── Context/ # Global state providers (e.g., AuthContext)
│ ├── Firebase/ # Firebase config and auth setup
│ ├── Hooks/ # Custom React hooks
│ ├── Layout/ # Layout components (e.g., Header, Footer)
│ ├── Libs/ # External libraries/helpers
│ ├── Pages/ # Route-level components/pages
│ ├── Routes/ # React Router configuration
│ ├── App.css # Main CSS
│ └── main.jsx # App entry point
├── .env.local # Environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
</pre>
