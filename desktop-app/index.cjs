const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

const createWindow = () => {
  const window = new BrowserWindow({
    height: 800,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
    },
  });
  window.loadURL("http://localhost:5173/");
};

ipcMain.handle("get-file-name", (event, url) => {
  return path.basename(url);
});

ipcMain.handle("get-images", (event) => {
  const imageFolder = path.join(
    require("os").homedir(),
    "Desktop",
    "Wallpapers",
    "misc"
  );
  try {
    const files = fs.readdirSync(imageFolder);
    const imageFiles = files.filter((file) =>
      /\.(png|jpe?g|gif|bmp|webp)$/i.test(file)
    );

    return imageFiles.map((file) => `file://${path.join(imageFolder, file)}`);
  } catch (error) {
    console.error("Failed to read directory: ", error);
    return [];
  }
});

app.whenReady().then(() => {
  createWindow();
});
