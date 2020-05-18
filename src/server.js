const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3050;

app.use(cookieParser());

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/a', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, () => console.log(`app listening on ${port}`));