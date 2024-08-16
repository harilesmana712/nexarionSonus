document.addEventListener('DOMContentLoaded', () => {
    const ws = new WebSocket('ws://localhost:3000'); // Koneksi ke server WebSocket

    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const pairingForm = document.getElementById('pairingForm');
    const pairingCodeElement = document.getElementById('pairingCode');
    const barcodeCanvas = document.getElementById('barcodeCanvas'); // Canvas untuk barcode
    const updateCommandsElement = document.getElementById('updateCommands');
    const messagesElement = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');

    // Fungsi untuk menampilkan pairing code dan barcode
    function displayPairingCode(code) {
        pairingCodeElement.textContent = `Your Pairing Code: ${code}`;
        
        // Buat barcode menggunakan qrcode.js
        new QRCode(barcodeCanvas, {
            text: code,
            width: 256,
            height: 256
        });
    }

    // Fungsi untuk menampilkan update command
    function displayUpdateCommand(update) {
        const updateDiv = document.createElement('div');
        updateDiv.textContent = `Update: ${update}`;
        updateCommandsElement.appendChild(updateDiv);
    }

    // Saat form pairing dikirim
    pairingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const phoneNumber = phoneNumberInput.value.trim();
        if (phoneNumber) {
            ws.send(JSON.stringify({ action: 'getPairingCode', phoneNumber })); // Kirim nomor WA ke server
        }
    });

    // Saat terhubung ke server
    ws.onopen = () => {
        console.log('Connected to server');
    };

    // Menerima pesan dari server WebSocket
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.pairingCode) {
            displayPairingCode(data.pairingCode);
        } else if (data.updateCommand) {
            displayUpdateCommand(data.updateCommand);
        } else if (data.message) {
            displayMessage(data.message);
        }
    };

    // Mengirim pesan ke server saat tombol "Send" diklik
    sendMessageButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            ws.send(JSON.stringify({ message })); // Kirim pesan ke server
            messageInput.value = ''; // Kosongkan input
        }
    });

    // Menangani error WebSocket
    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    // Menangani saat koneksi WebSocket tertutup
    ws.onclose = () => {
        console.log('Disconnected from server');
    };
});