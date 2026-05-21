# 📚 Online Library System

A React-based online library application built with **Vite**, **React Router**, and **Redux Toolkit**. Users can browse books by category, search by title or author, view book details, and add new books to the library.

---

## 🔗 Github Repository Link

You can access the full source code, commit history, and project structure here:

➡️ **https://github.com/nikhilcodev/online-library-system-react**

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

You can verify your installations by running:

```bash
node -v
npm -v
```

---

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/nikhilcodev/online-library-system-react
```

2. **Navigate into the project directory**

```bash
cd online-library-system-react
```

3. **Install dependencies**

```bash
npm install
```

---

### ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/         # Reusable components (Navbar, BookCard, etc.)
├── pages/              # Page-level components
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── AddBook.jsx
│   └── NotFound.jsx
├── store/              # Redux store and slices
│   ├── store.js
│   └── booksSlice.js
├── App.jsx             # Main app with route definitions
└── main.jsx            # Entry point
```

---

## 🗺️ Pages & Routes

| Route              | Page          | Description                                    |
| ------------------ | ------------- | ---------------------------------------------- |
| `/`                | Home          | Landing page with categories and popular books |
| `/books/:category` | Browse Books  | Books filtered by category, with search        |
| `/book/:id`        | Book Details  | Detailed view of a selected book               |
| `/add`             | Add Book      | Form to add a new book via Redux               |
| `*`                | 404 Not Found | Handles all undefined routes                   |

---

## 🛠️ Tech Stack

| Tool                       | Purpose                          |
| -------------------------- | -------------------------------- |
| Vite                       | Project scaffolding & dev server |
| React                      | UI library                       |
| React Router DOM           | Client-side routing              |
| Redux Toolkit              | Global state management          |
| CSS / Tailwind | Styling                          |

---

## ✨ Features

- 🏠 **Home Page** — Welcome message, book category list, and popular book cards
- 📚 **Browse Books** — Filter books by category via dynamic routes; search by title or author
- 📖 **Book Details** — View full details (title, author, description, rating) for any book
- ➕ **Add Book** — Add a new book using a validated form; state managed with Redux
- 🚫 **404 Page** — Custom not-found page showing the invalid URL, with a link back to Home

---

## 🧑🏻‍💻 Author

**Nikhil Sharma** <br>
GitHub: https://github.com/nikhilcodev <br>
E-mail: nikhilksharma5@gmail.com