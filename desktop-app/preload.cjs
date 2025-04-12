const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getImages: () => ipcRenderer.invoke("get-images"),
  getFileName: (url) => ipcRenderer.invoke("get-file-name", url),
});
