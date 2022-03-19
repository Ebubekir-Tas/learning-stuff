const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/userMsg', (req, res)=> {
  res.json({message: 'hello'})
})

app.listen(3001);
