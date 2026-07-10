# 💼 Job Listing UI - React Props

A simple and responsive Job Listing UI built using **React.js** to understand and practice the concept of **Props**. This project displays multiple job cards dynamically by passing data from a parent component (`App.jsx`) to a reusable child component (`Card.jsx`).

## 📸 Preview

<img width="100%" src="https://github.com/user-attachments/assets/84564185-4942-4c4a-853e-addc2d8baf0d" />
<!-- <img width="1536" height="863" alt="image" src="https://github.com/user-attachments/assets/84564185-4942-4c4a-853e-addc2d8baf0d" /> -->


---

## 🚀 Features

- Reusable React Components
- Dynamic rendering using `map()`
- Data passed using React Props
- Job cards generated from an array of objects
- Company logo
- Company name
- Job role
- Posted date
- Employment type
- Experience level
- Salary per hour
- Job location
- Save button with Lucide React icon
- Apply Now button
- Clean and modern UI

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6)
- CSS3
- HTML5
- Vite
- Lucide React Icons

---

## 📂 Project Structure

```
src
│
├── components
│   └── Card.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📖 React Concepts Used

- Functional Components
- React Props
- Array of Objects
- map() Function
- Component Reusability
- Dynamic Rendering

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/job-listing-react-props.git
```

Go to the project folder

```bash
cd job-listing-react-props
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## 📌 How It Works

- Job data is stored inside an array of objects in `App.jsx`.
- Each object contains company details such as logo, name, role, salary, tags, and location.
- The `map()` function loops through the array.
- Every object is passed to the `Card` component using React Props.
- The `Card` component displays each job dynamically.

---

## 📷 Sample Data

```javascript
{
  name: "Google",
  post: "Frontend Developer",
  tag1: "Full Time",
  tag2: "Junior Level",
  pay: "$52/hr",
  location: "Bangalore, India"
}
```

---

## 🎯 Learning Outcome

This project helped me understand:

- React Props
- Component Reusability
- Dynamic UI Rendering
- Passing Data Between Components
- Rendering Lists with map()
- Organizing React Projects

---

## 👨‍💻 Author

**Omkar Mete**

- GitHub: https://github.com/OmkarMete
- LinkedIn: https://linkedin.com/in/omkarmete93

---

## ⭐ Support

If you liked this project, consider giving it a ⭐ on GitHub.
