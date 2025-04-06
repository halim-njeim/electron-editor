const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    height: 800,
    width: 800,
  });
  window.loadURL("http://localhost:5173/");
};

app.whenReady().then(() => {
  createWindow();
});
