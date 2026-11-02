# FT-WEB-101 — Task 1: Personal Profile Page

Personal Profile Web Page project for **Field Training I (FT-WEB-101)**, Fall 2026–2027, Faculty of Computer Science & Engineering, **New Mansoura University**.

---

## 👨‍💻 Student Information

* **Name:** Mohamed Mahmoud Hassan Fathy
* **Student ID:** 224101533
* **Course:** Field Training I (FT-WEB-101)
* **Instructor / Teaching Assistant:** Eng. Khaled Zahran ([@khaled-elsaeed](https://github.com/khaled-elsaeed))

---

## 🚀 Features

1. **Semantic HTML5 Architecture:**
   * Structured layout wrapped strictly with `<header>`, `<main>`, and `<footer>` elements.
   * Student name prominently styled in the main `<h1>` heading.

2. **Responsive Flexbox Layout:**
   * Top navigation bar with the student name on the left and smooth navigation links on the right using Flexbox (`justify-content: space-between`).
   * Three distinct cards displaying Skills, Problem Solving, and Hobbies arranged horizontally with `display: flex` and consistent `gap: 20px`.
   * Responsive media query breakpoint (`@media (max-width: 640px)`) ensuring seamless mobile viewing.

3. **Light & Dark Theme Toggle:**
   * Global color palettes stored using CSS variables in `:root`.
   * JavaScript toggles the `dark` class on `document.body` via a single button click.
   * Pure CSS handles theme styling (`body.dark`) adhering strictly to clean code guidelines.

4. **Interactive Contact Form & Dynamic Greeting:**
   * Real-time visitor name detection updating a personalized welcome message as you type.
   * Semantic form controls with matching `for` and `id` attributes (`for="email"` and `id="email"`).
   * Client-side validation rejecting empty email submissions without reloading the page.

5. **Optimized Assets & Typography:**
   * Universal `box-sizing: border-box` applied across all elements.
   * Circular profile image located in `images/me.jpg` with descriptive `alt` text.

---

## 📂 Project Structure

```text
FT-WEB-101-Task1-224101533/
│
├── index.html         # Main HTML document (semantic markup, photo, cards, form)
├── README.md          # Project documentation and assignment overview
├── css/
│   └── style.css      # Styling, CSS variables, Flexbox layouts, dark theme
├── js/
│   └── script.js      # Dark mode toggle, interactive greeting, and form check
└── images/
    └── me.jpg         # Profile picture asset
```

---

## 💻 How to Run Locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/minemamd/FT-WEB-101-Task1-224101533.git
   ```
2. Navigate into the folder:
   ```bash
   cd FT-WEB-101-Task1-224101533
   ```
3. Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

---

## 🌐 Live GitHub Pages Deployment

To view this site live on GitHub:
1. Navigate to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, select `Deploy from a branch`.
3. Choose the `main` branch and `/ (root)` folder, then click **Save**.
4. Your site will be published at: `https://minemamd.github.io/FT-WEB-101-Task1-224101533/`

---

## 📜 Academic Integrity Note

This project is authored by **Mohamed Mahmoud Hassan Fathy** following all specifications outlined in NMU FT-WEB-101 Task 1 requirements.
