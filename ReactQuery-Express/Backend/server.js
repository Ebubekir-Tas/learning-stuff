const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.post('/userMsg', (req, res)=> {
  res.json({
    message: 'Sample Server Response', 
    ...req.body
  });
});

app.listen(3001);
