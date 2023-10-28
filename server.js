const express = require('express');
const path = require('path');
const app = express();

//react와의 ajax 요청을 원할하기 위한 코드
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'yujeong/build')));

app.get('/', function (req,res) {
  응답.sendFile(path.join(__dirname, '/yujeong/build/index.html'));
});

const OpenAI = require('openai');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();
const openai = new OpenAI();

const apiKey = process.env.OPENAI_API_KEY