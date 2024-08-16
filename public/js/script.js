document.addEventListener('DOMContentLoaded', function() {
    fetch('/get-pairing-code')
        .then(response => response.json())
        .then(data => {
            if (data.qr) {
                // Render the QR code as an image
                const img = document.createElement('img');
                img.src = `data:image/png;base64,${data.qr}`;
                document.getElementById('qr-container').appendChild(img);
            }

            if (data.pairingCode) {
                document.getElementById('pairing-code').innerText = data.pairingCode;
            }
        })
        .catch(error => console.error('Error fetching pairing code:', error));
});