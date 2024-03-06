//Little API for the back-end side of the application.
//It does not have any security for the moment 
//Typo used : camelCase

const express = require('express');
const app = express();
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alten-test'
})

app.use(express.json());

app.listen(8080, () => {
    console.log("Server listening");
})

//--------------------Endpoints : 

// returns all products
app.get('/products', (req, res) => {
    

    connection.query('SELECT * FROM product', (err, rows, fields) => {
        if (err) throw err

        console.log('GET products')
        res.status(200).json(rows)
    })
    
})

// returns all details from specified id 
app.get('/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    connection.query('SELECT * FROM product WHERE id ='+id, (err, rows, fields) => {
        if (err) throw err
        console.log('GET product by ID : '+id)

        res.status(200).json(rows)
    })
    
})

// creates a new product
app.post('/products', (req,res) => {
    let body = req.body
    if(body.image == ""){
        body.image = NULL;
    }
    if(body.rating == ""){
        body.image = NULL;
    }
    let sqlRequest = 'INSERT INTO product(code, name, description, price, quantity, inventoryStatus, category, image, rating) VALUES('+body.code+', "'+body.name+'", "'+body.description+'", '+body.price+', '+body.quantity+', "'+body.inventoryStatus+'", "'+body.category+'", "'+body.image+'", '+body.rating+')';
    connection.query(sqlRequest, (err) => {
        if (err) throw err
        
        console.log('POST Product')
        res.status(200).json(true)
    })
    
})

//deletes a product
app.delete('/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const sqlRequest = "DELETE FROM product WHERE id ="+id
    connection.query(sqlRequest, (err) => {
        if (err) throw err
        
        console.log('Delete product by ID : '+id)
        res.status(200).json(true)
    })
    
})


//updates a product with Patch
//I normally would have picked PUT to edit the product in a single request, but since this is a PATCH request, Let's make it update a single field
app.patch('/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const valueToUpdate = req.body.value
    const fieldToUpdate = req.body.field
    connection.query('UPDATE product SET '+fieldToUpdate+' = '+valueToUpdate+' WHERE id = '+id, (err, rows, fields) => {
        if (err) throw err
        if(rows.affectedRows == 0){
            res.status(200).json(false)
        }else{
            console.log('PATCH ID : '+id+' Field : '+fieldToUpdate+' Value : '+valueToUpdate)
            res.status(200).json(true)
        }
        


    })
})
    



