# 🧮Linulator

A simple and modern calculator desktop app built with **React**, **Vite**, **Tailwind CSS**, and **Electron.JS**.

---

## 🎥 Demo

![til](public/walkthrough.gif)

---

## ✨ Features

* ➗ Perform basic arithmetic operations (add, subtract, multiply, divide)
* 🧮 Extra functions: **percent**, **invert (±)**, and **clear (AC)**
* 🎨 Responsive UI powered by **Tailwind CSS**
* ⌨️ Full **keyboard + mouse** support
* 💻 Cross-platform: runs on **Windows**, **macOS**, and **Linux**

---

## 🚀 Getting Started

### ⚙️ Installation

```sh
git clone https://github.com/yourusername/linulator.git
cd linulator
npm install
```

---

### 🛠 Development

Run React in dev mode (with hot reload):

```sh
npm run dev
```

Running with ElectronJS

Electron powers the desktop app experience.
To run Linulator inside an Electron window, use:

```sh
npm start
```

* Starts Vite (serves the React app).
* Launches Electron with main.js.
* Opens a desktop window running your React + Tailwind UI.

Whenever you edit code, React auto-reloads, and Electron refreshes the app window. 🚀

---

### 🏗 Build

To build the app for production:

```sh
npm run build
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── components/      # React components (Calculator, Operations, etc.)
│   ├── App.jsx          # Main React app
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS and custom styles
├── main.js              # Electron main process
├── package.json         # Project configuration
└── ...
```

---

## 🛠 Technologies Used

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Electron](https://www.electronjs.org/)

---

> Made by **TanishEnigma** with 🖱️ + ⌨️
