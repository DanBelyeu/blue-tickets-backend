const express = require('express');
const app = express();
const port = 3001;

var data = require('./data');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ticketCount/:name', (req, res) => {
    const name = req.params.name;
    res.send(data.getTicketCount(name).toString());
  });

app.post('/update', (req, res) => {
    const { name } = req.body;
    data.incrementTicketCount(name);
    res.send(data.getTicketCount(name).toString());
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});