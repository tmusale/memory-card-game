# 🧩 React Memory Game

An interactive, fast-paced memory game built with **React.js**. This project challenges users to match pairs (or dice) while managing complex application state and utilizing modern React hooks.

[**🎮 Play the Live Demo**](INSERT_YOUR_DEPLOYED_LINK_HERE)

---

## 📌 About the Project

The Memory Game shuffles cards randomly at the start.  
Players flip two cards at a time to find matching pairs.

- If the cards match, they remain visible
- If they do not match, they flip back
- The game ends when all pairs are matched

This project focuses on building real-world React logic with clean UI interactions.

---

## ⚡ Features
* **Dynamic Grid:** Randomly generated game board on every new game.
* **Stateful Gameplay:** Tracks "held" items, match attempts, and game-winning conditions.
* **Conditional Rendering:** Displays a "You Win" message and a confetti celebration upon completion.
* **Responsive Design:** Optimized for both desktop and mobile play.
* **Game Reset:** Allows users to restart and generate a fresh board at any time.

---

## 🛠️ Tech Stack
* **React.js:** (Functional Components)
* **CSS3:** For the game grid and "flip" or "selected" animations.
* **Nanoid:** For generating unique keys for list items.
* **Canvas-confetti:** For the victory celebration effect.

---

## 🧠 Technical Highlights
Building this project helped me master several core React concepts:
* **`useState`:** Managing the state of individual cards/dice and the overall game status.
* **`useEffect`:** Syncing the game state to check for a "win" condition whenever the cards change.
* **Lifting State Up:** Passing data between the parent `App` component and child `Die` or `Card` components.
* **Declarative Programming:** Using array methods like `.map()` to render the UI based on the underlying data array.

---

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git](https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    npm start
    ```
4.  Open `http://localhost:3000` (or the port shown in your terminal) in your browser.

---

## 📜 Credits
This project was built as part of the **React Course on Scrimba**. It served as a capstone project to practice hooks and state management.

---
**Developed by [Your Name]** *Feel free to reach out for collaborations!*