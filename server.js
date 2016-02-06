'use strict';

var express = require('express');
var app = express();

app.use(express.static('./dist'));

console.log('Go to localhost:8000');

app.listen(8000);
