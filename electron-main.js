const { app, BrowserWindow } = require('electron');
const path = require('path');
// const Blockly = require('blockly')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1200, // Adjust as needed
        height: 800, // Adjust as needed
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'), // Optional preload script (for security and more advanced features)
            nodeIntegration: false, // Recommended for security, but might need to be true if you need direct Node.js access in renderer initially
            contextIsolation: true,  // Recommended security feature
        }
    });

    // Load your blockly_editor.html file
    //mainWindow.loadFile(path.join(__dirname, 'src', 'blockly_editor.html'));
    mainWindow.loadFile(path.join(__dirname, 'src', 'editor.html'));

    // Open DevTools (for debugging - remove in production)
    mainWindow.webContents.openDevTools(); // Optional: Open developer tools on startup
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.