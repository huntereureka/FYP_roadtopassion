const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
// const jsdom = require('jsdom');
// const dom = new jsdom.JSDOM("");
// const jquery = require('jquery')(dom.window);

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/home.html')); //__dirname resolves to your project folder
});

router.get('/quiz', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/quiz.html'));
});

router.get('/bia', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/bia.html'));
});

router.get('/bft', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/bft.html'));
});

router.get('/ifs', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/ifs.html'));
});

router.get('/it', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/it.html'));
});

router.get('/dsf', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/dsf.html'));
});

router.get('/drag_and_drop', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/save_image.html'));
});

router.get('/coordinates', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/coordinates.html'));
});

router.get('/resize', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/resize.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

// app.use(express.static(__dirname + '/static'));

console.log('Running at Port 3000');