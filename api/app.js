const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        const result = eval(expression); 
        res.json({ result }); 
    } catch (error) {
        res.status(400).json({ error: 'Ekspresi invalid' }); 
    }
});

module.exports = app; 
