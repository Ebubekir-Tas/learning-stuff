const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/userMsg', (req, res)=> {
  res.json({message: 'hello'})
})

app.listen(3001);
