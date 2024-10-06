const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); 
});

// Endpoint untuk melakukan perhitungan
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        const result = eval(expression); 
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
