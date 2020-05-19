const express = require('express');
const app = express();
const path = require('path');
const port = 3060;
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://a.com');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/static', express.static(__dirname));

app.get('/getJS', (req, res) => {
    if(!req.cookies.content) {
        res.cookie('content', 'shopping', {
            httpOnly: true
        });
    }

    res.sendFile(path.resolve(__dirname, './ad.js'));
});

app.get('/get-add-url', (req, res) => {
    const {
        content
    } = req.cookies || {};

    let adPath = '';
    switch(content) {
        case 'shopping':
            adPath = 'shopping.html';
            break;
        default:
            adPath = 'ad.html';
            break;
    }

    res.send(`http://b.com/static/${adPath}`);
});

app.listen(port, () => console.log(`app listening on ${port}`));