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

app.get('/ticketCount/:name', async (req, res) => {
    data.getTicketCount(req.params.name)
    .then(count => count.toString())
    .then(count => res.send(count))
  });

app.post('/update', (req, res) => {
    const { name, isIncrement } = req.body;
    
    if (isIncrement) {
      data.incrementTicketCount(name)
      .then(() => data.getTicketCount(name))
      .then(count => count.toString())
      .then(count => res.send(count))
    } else {
      data.decrementTicketCount(name)
      .then(() => data.getTicketCount(name))
      .then(count => count.toString())
      .then(count => res.send(count))
    }
});

app.get('/getItems', async (req, res) => {
  data.lookupItems()
  .then(items => res.send(items));
})

app.post('/addItem', (req, res) => {
  const { name, description, cost, image } = req.body;
  data.addItem(name, description, cost, image);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});