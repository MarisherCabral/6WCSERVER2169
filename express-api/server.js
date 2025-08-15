const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/data', (req, res) => {
    res.json({message: 'This is JSON data', time: new Date() });
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json({
        message: `Hello, ${name}!`,
        date: new Date(),
        info: 'Same resource used with personalized using query parameters.'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})