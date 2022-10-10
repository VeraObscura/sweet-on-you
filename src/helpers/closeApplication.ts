const { ipcRenderer } = require("electron");

export const quitApplication = (): any => {
  ipcRenderer.send("close");
};
