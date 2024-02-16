const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(async (req, res) => {
    res.status(404).json({ error: 'Not Found' });
});



app.listen(3001, async () => {
    console.log("\x1b[33mServer listening at http://localhost:3001\x1b[37m");
});
