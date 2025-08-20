const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
    titleBarStyle: "hidden",
    ...(process.platform !== "darwin" ? { titleBarOverlay: true } : {}),
  });

  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
