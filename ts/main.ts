/// <reference path="../typings/tsd.d.ts"/>
import * as path from 'path';

const electron: GitHubElectron.Electron = require('electron');
const app: GitHubElectron.App           = electron.app;
const BrowserWindow                     = electron.BrowserWindow;  //TODO: typing this

require('crash-reporter').start({
	companyName: 'aiya000',
	submitURL:   'https://github.com/aiya000/Eleculator'
});

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	let mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.loadURL('file://' + path.resolve(__dirname, '..', '..', 'index.html'));
	mainWindow.webContents.openDevTools();
	mainWindow.on('closed', () => mainWindow = null);
});
