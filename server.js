const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const { startXeonBot } = require('./index'); // Mengimpor bot dari file index.js

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Sajikan file HTML dan JavaScript di folder public
app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Kirim pesan dari bot ke antarmuka web melalui WebSocket
    startXeonBot().then((bot) => {
        bot.ev.on('messages.upsert', (message) => {
            ws.send(JSON.stringify(message));
        });
    });

    // Menerima pesan dari antarmuka web dan meneruskannya ke bot
    ws.on('message', (data) => {
        const parsedData = JSON.parse(data);
        // Proses pesan yang diterima dari antarmuka web
        console.log('Received:', parsedData);
        // Misalnya, bisa mengirim pesan balik ke bot atau lainnya
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Menjalankan server di port 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});