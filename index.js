const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello, ${name}`);
});

console.log('Greetings from the main branch!');

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
