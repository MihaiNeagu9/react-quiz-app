# ❓ Quiz App - React Project 

**Quiz App** is a React practice project focused on building an interactive multiple-choice quiz experience.  
The project is scaffolded with Vite and includes a complete visual style system for quiz flow, answers, and final summary screens.

This project is intended to demonstrate practical skills in **React state management, conditional rendering, and user interaction handling**.

---

## 🔍 Overview

Current Phase

- Main app structure with `Header` and `Quiz` components in `src/App.jsx`
- Quiz data extracted into `src/data-question.js`
- Current question rendered from the data source (`QUESTION_DATA[0]`)
- Answers rendered dynamically with `map()` as buttons
- Base styling and assets are already included in the project
- Quiz is timed. The progress bar shows the remaining time for the current question

In Progress

- Navigation between multiple questions
- Storing selected answers in state
- Score calculation and final summary screen
- Correct/wrong/skipped visual states based on user interaction
- Quiz restart functionality


---

## 🖼️ Screenshots

Screenshots coming soon...

---

## ✨ Key Features

- Step-by-step multiple-choice quiz flow
- Answer state feedback (selected, correct, wrong, skipped)
- Progress indication during quiz completion
- Final summary screen with per-question breakdown
- "Skip" interaction support in the prepared UI
- Responsive layout and polished visual styling

---

## 🧠 Technical Skills

- Set up and structured a React + Vite project for iterative feature development
- Prepared a scalable base for state-driven UI (question index, answers, completion state)
- Designed UI states for answer validation and feedback
- Built a maintainable foundation for splitting logic into reusable components
- Organized assets and styling for clear separation of concerns
- Prepared the project for linting and production builds 

---

## 🛠 Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React 19                    |
| Build Tool | Vite 7                      |
| Language   | JavaScript (ES Modules)     |
| Styling    | CSS (custom, no frameworks) |
| Linting    | ESLint                      |

---

## 📂 Project Structure

```text
12-practice-project-quiz-app/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Header.jsx
|   |   `-- Quiz.jsx
|   |-- App.jsx
|   |-- data-question.js
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
`-- README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run the app
```bash
npm run dev
```

Visit:
```
http://localhost:5173
```

---

## 🚀 Possible Enhancements

- 

---

## 👤 Author

Developed by **Neagu Mihai Daniel**  
Junior Developer | React | JavaScript