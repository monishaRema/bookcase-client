<img src="./src/assets/logo.png" width="120">

# Book Case  
*Your digital bookshelf—organized, interactive, and social.*

A modern web application that allows users to catalog books they've read, are currently reading, or want to read. With built-in reviews, upvotes, progress tracking, and a social touch, **Book Case** helps readers stay organized and discover new books through the bookshelf.  
It bridges the gap between personal reading logs and social discovery, making reading more structured and community-driven.

## 🌐 Live Demo  
[🔗 Visit Site](https://book-case-92d50.web.app/) — *Your reading journey starts here.*

---

## 📝 Purpose

> **Mission:** *To empower readers to track, share, and celebrate their reading journey through an intuitive, social, and visually engaging platform.*

**Book Case** solves the problem of scattered book lists and reading logs by offering a centralized, interactive, and beautifully designed space for readers. Whether you're a casual reader or a dedicated bibliophile, this app keeps your reading journey organized and engaging.

It simplifies personal library management—helping users track what they’ve read, what they’re currently exploring, and what’s next on their list. By integrating social features like reviews and upvotes, **Book Case** transforms reading into a shared experience and a source of inspiration.

With progress tracking, visual dashboards, seamless book management, and real-time updates, the app creates a complete ecosystem for readers to stay motivated, discover new titles, and connect with the wider reading community.

> **Tagline:** *Your digital bookshelf—organized, interactive, and social.*

---

## 🚀 Key Features

- 📖 **Add & Organize Books**  
  Easily add books with title, author, cover, category, pages, and reading status: **Want to Read**, **Reading**, or **Read**.

- 🔄 **Track & Update Reading Status**  
  Dynamically update reading status from *Want to Read* → *Reading* → *Read*. Once marked as **Read**, the status becomes locked for integrity.

- ✍️ **Write & Share Reviews (One per Book)**  
  Submit a single review per book. View reviews from the community to help you decide your next read.

- 👍 **Upvote Popular Books (No Self-Upvotes)**  
  Discover trending titles through community votes—users cannot upvote their own listed books.

- 📊 **Visualize Reading Progress**  
  Intuitive charts to track your reading habits and progress. Data is visualized by books with categories. 

- 📋 **Comprehensive Dashboard View**  
  See everything at a glance: total books, number of books **Read**, **Reading**, and **Want to Read**—all live-updating.

- 🧾 **Instant Book & Review Management**  
  Add, edit, or delete your books and reviews. All changes reflect **immediately** in the UI.

- 🔐 **Secure Authentication & Authorization**  
  - Login with **email/password** or **Google**
  - **Protected API routes** secured with **Firebase Token** and **JWT Authorization**

- 🎨 **Smooth UI/UX**  
  Clean, responsive interface using **Tailwind CSS**, **Daisy UI**, **Framer Motion**, and real-time feedback with **React Toastify** and **SweetAlert2**.

---

## 🧰 Tech Stack

### Frontend
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **Daisy UI** – Ready-made component styling
- **Framer Motion** – Animations & carousels
- **Recharts** – Reading progress by book categories visualization
- **React Router** – SPA navigation
- **React Icons** – Vector icons
- **React Toastify** – Notifications
- **SweetAlert2** – Alert modals
- **Lottie React** – Engaging animations
- **React Tooltip** – Tooltips

### Backend
- **Node.js**, **Express**, **CORS** – RESTful API server
- **MongoDB** – Database for books, users, reviews

### Authentication & Authorization
- **Firebase Auth** – Email/password + Google login
- **JWT** – Token-based secure access to APIs

### Deployment
- **Frontend** – Firebase Hosting 
- **Backend** – Vercel 

---

## 📁 Folder Structure 

<pre>
Book Case/
├── node_modules/
├── Dist/ # Distribution files
├── public/
├── src/
│ ├── assets/ # Images, lottie file and other assets
│ ├── Components/ # Reusable UI components
│ ├── Context/ # Global state providers (AuthContext)
│ ├── Firebase/ # Firebase config and auth setup
│ ├── Hooks/ # Custom React hooks
│ ├── Layout/ # Layout components
│ ├── Libs/ # Helpers
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

## 🧪 Setup & Installation
```bash
git clone https://github.com/monishaRema/bookcase-client.git
cd bookcase-client
npm install
