# 📝 ToDo App

A simple ToDo application built for educational purposes

- ⚛️ **Next.js + TypeScript** for the frontend
- 🧩 **Node.js + Express** for the backend
- 🔐 **JWT-based custom authentication**
- 🗃️ **MongoDB** for data storage

---

## 🚀 Features

- ✅ Create, edit, delete tasks
- 👤 Register / Login with secure JWT tokens
- 🔐 Protected routes with custom middleware
- 💡 Responsive UI with a clean design
- 🌐 RESTful API built with Express

---

## 🧰 Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)

---

## 📦 Getting Started

### Prerequisites

- Node.js v18+
- Nodemon
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrianEnev/next-todo.git
   cd next-todo

2. **Install Dependencies**
# For frontend
cd frontend
npm install

# For backend
cd ../backend
npm install

3. **Set up environment variables**
Create .env files in both client and server directories:
backend/.env:
PORT=4000
MONGODB_CONNECTION_STRING=your_mongodb_uri
JWT_SECRET=your_jwt_secret

frontend/.env.local
NEXT_PUBLIC_API_URL=your_api_url

4 **Run the app**
# In one terminal for the backend
cd backend
npm run dev

# In another terminal for the frontend
cd frontend
npm run dev

### 🔐 Authentication Flow
User signs up, data is stored in mongodb

User signs in, JWT token is generated and stored in cookies

Authentication handled using JWT token