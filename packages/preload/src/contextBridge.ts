import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('api', {
  login: (data: object) => ipcRenderer.send('login', data),
  register: (data: object) => ipcRenderer.send('register', data),
});
