const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// const jsdom = require('jsdom');
// const dom = new jsdom.JSDOM("");
// const jquery = require('jquery')(dom.window);

// import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');

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
    res.sendFile(path.join(__dirname + '/templates/tile_customization.html'));
});

router.get('/coordinates', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/coordinates.html'));
});

router.get('/resize', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/resize.html'));
});

router.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/test.html')); //__dirname resolves to your project folder
});

//add the router
app.use('/', router);

app.use(express.static(__dirname + '/static'));
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

// AWS.config.update({
//     accessKeyId: "AKIARZFVAVYWMD4HEKVH",
//     secretAccessKey: "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",
//     // region: "ap-southeast-1" not needed for S3
// });

// var s3 = new AWS.S3();

// var params = {
//     Bucket: 'fypj2022/tile_images',
//     Key: 'mykey.txt',
//     Body: "HelloWorld"
// };

// s3.putObject(params, function(err, res) {
//     if (err) {
//         console.log("Error uploading data: ", err);
//     } else {
//         console.log("Successfully uploaded data to" + params.Bucket);
//     }
// });