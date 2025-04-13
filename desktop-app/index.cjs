const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

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

ipcMain.handle("save-image", (event, name, arrayBuffer) => {
  const fileDir = path.join(
    require("os").homedir(),
    "Desktop",
    "Wallpapers",
    "misc"
  );
  const imagePath = path.join(fileDir, name);

  //This is what the buffer does?
  const buffer = Buffer.from(arrayBuffer);

  fs.writeFileSync(imagePath, buffer);

  return true;
});

ipcMain.handle(
  "rotate-image",
  async (event, fullPath, degrees = 90, overwrite = false) => {
    const imageFolder = path.join(
      require("os").homedir(),
      "Desktop",
      "Wallpapers",
      "misc"
    );
    const outputPath = overwrite
      ? fullPath
      : path.join(imageFolder, "rotated_" + path.basename(fullPath));

    await sharp(fullPath).rotate(degrees).toFile(outputPath);

    return outputPath;
  }
);

ipcMain.handle(
  "apply-greyscale",
  async (event, fullPath, outputName, overwrite = false) => {
    const imageFolder = path.join(
      require("os").homedir(),
      "Desktop",
      "Wallpapers",
      "misc"
    );
    const outputPath = overwrite
      ? fullPath
      : path.join(
          imageFolder,
          outputName || "greyscale_" + path.basename(fullPath)
        );

    await sharp(fullPath).grayscale().toFile(outputPath);

    return outputPath;
  }
);

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
