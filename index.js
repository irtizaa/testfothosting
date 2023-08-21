var express = require('express');
var app = express();

var server = app.listen(1000, function () {
    console.log('Server is running on port 1000..');
});