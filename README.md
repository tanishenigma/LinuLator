# Linulator

A simple and modern calculator desktop app built with **React**, **Vite**, **Tailwind CSS**, and **Electron**.

---

## ✨ Features

- ➕➖✖️➗ Perform basic arithmetic operations (add, subtract, multiply, divide)  
- 🧮 Extra functions: **percent**, **invert (±)**, and **clear (AC)**  
- 🎨 Responsive UI powered by Tailwind CSS  
- ⌨️ Full keyboard + mouse support  
- 💻 Cross-platform: runs on **Windows**, **macOS**, and **Linux**  

---
## 📥 Install on Linux (.deb)

You can download the latest `.deb` package directly from the [GitHub Releases](https://github.com/tanishenigma/linulator/releases) page.  

To install from the terminal:

```sh
# Download the latest release (.deb)
wget https://github.com/yourusername/linulator/releases/download/v0.0.1/linulator_0.0.1_amd64.deb

# Install the package
sudo dpkg -i linulator_0.0.1_amd64.deb

# Fix missing dependencies (if any)
sudo apt --fix-broken install


## 🚀 Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) **v18 or newer**  
- [npm](https://www.npmjs.com/) (comes with Node.js)  

---

### ⚙️ Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/linulator.git
cd linulator
npm install
```

---

### 🛠 Development

To start the app in development mode (with hot reload):

```sh
npm run dev
```

To launch the Electron app:

```sh
npm start
```

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

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Electron](https://www.electronjs.org/)

---

## 📝 License

MIT

---

> Made with 🖱️& ⌨️ using React,