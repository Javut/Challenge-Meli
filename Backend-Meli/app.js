const express = require('express')
const app = express()
const port = 3000


let BD = {
"author": {
"name": "Jaider",
"lastname": "Vergara" },
categories: ["Cat1", "Cat2", "Cat3"],
items: [
    {
        "id": "PROD001",
        "title": "Telefono Motorola V3",
        "price": {
            "currency": "AR",
            "amount": 10,
            "decimals": 199
        },
        "picture": "http://",
        "condition": "New",
        "free_shipping": true,
        "sold_quantity": 1,
        "description": "Celular smartphone"

    },
    {
        "id": "PROD002",
        "title": "iPHONE 12 Apple",
        "price": {
            "currency": "AR",
            "amount": 1234,
            "decimals": 4412
        },
        "picture": "http://",
        "condition": "New",
        "free_shipping": true,
        "sold_quantity": 1,
        "description": "Celular smartphone"

    },
    {
        "id": "PROD003",
        "title": "Macbook Pro 13",
        "price": {
            "currency": "AR",
            "amount": 124334,
            "decimals": 44112
        },
        "picture": "http://",
        "condition": "New",
        "free_shipping": true,
        "sold_quantity": 1,
        "description": "netbook"

    },
    {
        "id": "PROD004",
        "title": "Samsung Galaxy 13",
        "price": {
            "currency": "AR",
            "amount": 41234,
            "decimals": 412
        },
        "picture": "http://",
        "condition": "New",
        "free_shipping": true,
        "sold_quantity": 1,
        "description": "Celular smartphone"

    },
    {
        "id": "PROD005",
        "title": "Xiaomi 10one",
        "price": {
            "currency": "AR",
            "amount": 51234,
            "decimals": 4412
        },
        "picture": "http://",
        "condition": "New",
        "free_shipping": true,
        "sold_quantity": 1,
        "description": "Celular smartphone"

    },
    {
        "id": "PROD006",
        "title": "Lenovo",
        "price": {
            "currency": "AR",
            "amount": 551234,
            "decimals": 4412
        },
        "picture": "http://",
        "condition": "New",
        "free_shipping": true,
        "sold_quantity": 1,
        "description": "Netbook"

    }
    
    ]
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})
var result1="1";
app.get('/api/items', (req,res)  => {
    let query = req.param('q').toLowerCase()
    res.set('content-type', 'application/json');
    let salida = {"author":BD.author,"items":[],categories:BD.categories};
    for(let i = 0; i<BD.items.length;i++){
    
        if(BD.items[i].title.toLowerCase().indexOf(query)>=0 || BD.items[i].description.toLowerCase().indexOf(query)>=0){
            console.log("lo encontro")
            salida['items'].push({"id":BD.items[i].id,"title":BD.items[i].title,"price":BD.items[i].price,"picture":BD.items[i].picture,"condtion":BD.items[i].condition,"free_shipping":BD.items[i].free_shipping})
        }
    }
    res.send(salida)
    
})
const getProduct = (_id) => {
    let salida = {"author":BD.author};
    for(let i = 0;i<BD.items.length;i++){
        if(BD.items[i].id.toLowerCase()==_id.toLowerCase()){
           salida['item'] = BD.items[i]
           break;
        }
    }
    return(salida)
}
app.get('/api/items/:id', (req,res)  => {
    res.set('content-type', 'application/json');
    res.send(getProduct(req.params.id))
})
app.get('/api/items/:id/description', (req,res)  => {
    res.set('content-type', 'application/json');
    res.send(getProduct(req.params.id))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
