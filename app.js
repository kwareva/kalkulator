const express = require('express');
const cors = require('cors');

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());
app.use(cors());

// Endpoint untuk melakukan perhitungan
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        const result = eval(expression); // Evaluasi ekspresi matematika
        res.json({ result }); // Kirim balik hasil evaluasi dalam bentuk JSON
    } catch (error) {
        res.status(400).json({ error: 'Ekspresi invalid' }); // Balikkan error jika ekspresi tidak valid
    }
});

// Jalankan server (Vercel akan menangani ini)
module.exports = app; // Ekspor app untuk digunakan oleh Vercel
