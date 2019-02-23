// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;

function handleListinging()  
{
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListinging);

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });
