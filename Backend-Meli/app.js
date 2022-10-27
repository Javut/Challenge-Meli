const express = require('express');
const fetch = (url) => 
    import('node-fetch').then(({default: fetch}) => fetch(url));
// import express from 'express';

// import fetch from 'node-fetch';
const app = express()
const port = 3000


let BD = {
author: {
"name": "Jaider",
"lastname": "Vergara" },
categories: [],
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
        "free_shipping": false,
        "sold_quantity": 0,
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
        "free_shipping": false,
        "sold_quantity": 0,
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
        "free_shipping": false,
        "sold_quantity": 0,
        "description": "Celular smartphone"
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
        "free_shipping": false,
        "sold_quantity": 0,
        "description": "Celular smartphone"
    }
    
    ]
}


const recoveryData = async (query) => {
    
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then((respuesta) => {
            return respuesta.json()
        }).then((resp) => {
            //    resp.available_filters[0].values.map(categoryObject => BD.categories.push(categoryObject.name))
            //    resp.available_filters[0].values.map(categoryObject => console.log(categoryObject.name))
                for(let i = 0; i < 4 ; i++) {
                    BD.items[i].id = resp.results[i].id;
                    BD.items[i].title = resp.results[i].title;
                    BD.items[i].price.currency = resp.results[i].prices.prices[0].currency_id;
                    BD.items[i].price.amount = resp.results[i].prices.prices[0].amount;
                    BD.items[i].price.decimals = resp.results[i].prices.prices[0].amount;
                    BD.items[i].picture = resp.results[i].thumbnail;
                    BD.items[i].condition = resp.results[i].condition;
                    BD.items[i].free_shipping = resp.results[i].shipping.free_shipping;
                    BD.items[i].sold_quantity = resp.results[i].sold_quantity;
    
                    
                }
                
        })

}

    fetch("https://api.mercadolibre.com/items/MLA916798816/description")
    .then((respuesta) => {
        return respuesta.json()
    }).then((resp) => {
        for(let i = 0; i < 4 ; i++) {
            BD.items[i].description = resp.plain_text      
        }

    })


app.get('/prueba', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  res.send('Hello World!')
  console.log(BD);
})

var result1="1";
app.get('/api/items', async (req,res)  => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    console.log("Este es mi Query params: "+ req.query.q);
    let query = req.query.q
    await recoveryData(query);
    res.set('content-type', 'application/json');
    let salida = {"author":BD.author,categories:BD.categories,"items":[]};
    for(let i = 0; i<BD.items.length;i++){
        if(BD.items[i].title.toLowerCase().indexOf(query)<0){
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
    for(let x = 0;x<BD.items.length;x++){
        console.log("Aqui entre en el api/items")
        if(BD.items[x].id == req.params.id){
            console.log("Hola soy igual a: " + req.params.id)
            res.send(getProduct(req.params.id))
        }else{
            res.send("No se ha podido encontrar el ID")
        }
    }
})

app.get('/api/items/:id/description', (req,res)  => {
    res.set('content-type', 'application/json');
    res.send(getProduct(req.params.id))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
