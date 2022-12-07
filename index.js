const express = require("express");

const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const items = [
    {
    name: "yogurt",
    price: 200,
    currency: "NGN",
    Id: 1
},
{
    name: "banana",
    price: 20,
    currency: "USD",
    Id: 2
},
{
  name: "grape",
  price: 40,
  currency: "USD",
  Id: 3
},
{
  name: "apple",
  price: 35,
  currency: "NGN",
  Id: 4
},
{
  name: "orange",
  price: 25,
  currency: "USD",
  Id: 5
},
{
  name: "pineapple",
  price: 10,
  currency: "NGN",
  Id: 6
}
]

// GET/items
function getItems() {
  return {
    statusCode: 200,
    message: 'Items returned successfully',
    data: items
  }
}

// POST/add-items
function addItem(item) {
 // Process 

 const id = Math.floor(Math.random() * 100000)

 item.id = id 
 
 items.push(item)

 return {
    statusCode: 201,
    message: 'item created successfully',
    data: {
        id: {}
    }
 }
}

//GET/items/:id
function findItem(id) {

  const item = items.find((item) => item.Id = id)

  if (item) {
    return {
        statausCode: 200,
        message: 'Items found successfully',
        data: item
    }
  }else{
    return {
        statusCode: 404,
        message: 'Item not found',
        data: {}
    }
  }
}

//create a get endpont for getting list of shopping items
app.get("/items", (req, res) => {
  return res.json(getItems())
});

//create a post endpoint for accepting form data and add it to the shopping list
app.post("/add-item", function(req, res) {
    res.send('');
});

//create a get endpoint for display of a single item's name and price
app.get("/items/:id", function(req, res) {
  const id = req.params.id

  return res.json(findItem(id))
});

app.listen(8080, function() {
  console.log('Server is running...');
});