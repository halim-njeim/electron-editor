const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getImages: () => ipcRenderer.invoke("get-images"),
  getFileName: (url) => ipcRenderer.invoke("get-file-name", url),
  saveImage: (name, arrayBuffer) =>
    ipcRenderer.invoke("save-image", name, arrayBuffer),
  applyGreyscale: (fullPath, outputName, overwrite) =>
    ipcRenderer.invoke("apply-greyscale", fullPath, outputName, overwrite),
  rotateImage: (fullPath, degrees, overwrite) =>
    ipcRenderer.invoke("rotate-image", fullPath, degrees, overwrite),
});
