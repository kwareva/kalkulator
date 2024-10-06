const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public')); // Serves HTML and CSS files
app.use(bodyParser.json());

// Rute GET untuk mengirimkan halaman utama
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Pastikan path ini sesuai dengan lokasi file index.html
});

// Endpoint untuk melakukan perhitungan
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        const result = eval(expression); // Menggunakan eval untuk melakukan perhitungan
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
