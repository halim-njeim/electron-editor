const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getImages: () => ipcRenderer.invoke("get-images"),
  getFileName: (url) => ipcRenderer.invoke("get-file-name", url),
  saveImage: (name, arrayBuffer) =>
    ipcRenderer.invoke("save-image", name, arrayBuffer),
});
