/// <reference path="../typings/tsd.d.ts"/>
var electron: GitHubElectron.Electron = require('electron');
var app: GitHubElectron.App           = electron.app;
//TODO: typing this
var BrowserWindow                     = electron.BrowserWindow;

require('crash-reporter').start({
	companyName: 'aiya000',
	submitURL:   'https://github.com/aiya000/workspace'
});

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	var mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.loadURL('file://' + __dirname + '/../../index.html');
	mainWindow.webContents.openDevTools();
	mainWindow.on('closed', () => mainWindow = null);
});
