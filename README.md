# 🎯 Number Guessing Game

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Browser](https://img.shields.io/badge/Browser-Compatible-brightgreen?style=for-the-badge)

A lightweight, browser-based number guessing game built with vanilla JavaScript. No frameworks, no dependencies — just plain JS fun.

---

## 📖 About

The game generates a secret random number between **1 and 100** and challenges the player to guess it using browser prompts. After each guess, feedback is given to guide the player toward the correct answer.

---

## 🎮 How to Play

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. A prompt will appear — enter your guess
4. The game tells you if you're **too low 🔽** or **too high 🔼**
5. Keep guessing until you crack the number! 🎉

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
git clone https://github.com/lorddrago12/Number-Guessing-Game-Javascript.git
cd Number-Guessing-Game-Javascript
```

Then simply open `index.html` in your browser — no build step required.

---

## 🧠 How It Works

```javascript
const randomNumber = Math.floor(Math.random() * 100) + 1;
```

| Step | Description |
|------|-------------|
| 🎲 Generate | A random integer between 1–100 is created on page load |
| 📥 Input | Player's guess is captured via `prompt()` and parsed with `parseInt()` |
| 🔁 Loop | A `while` loop keeps the game alive until the correct number is guessed |
| 💬 Feedback | `if / else if` logic returns "Too low" or "Too high" hints each round |

---

## 📁 Project Structure

```
number-guessing-game/
├── index.html
├── game.js
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

> Made with ❤️ and vanilla JavaScript
