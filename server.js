const express = require("express");
const mongoose = require("mongoose");
const Menu = require('./models/menuModel')
const Orders = require('./models/ordersModel')
const app = express();
const uri = "mongodb+srv://jgsimeonidis:kwdikos@cluster0.flkabzj.mongodb.net/?retryWrites=true&w=majority"
// import Orders = { Course } from './course.js';

app.use(express.json())

var myHeaders = new Headers();
myHeaders.append("apikey", "unz9cn1ujfUzbBCEiF4jBpThuwuR2pv7");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


// route
app.get('/', (req, res) => {
    res.send('Welcome to DSQ Restaurant!')
})

// Returns menu
app.get('/menu', async(req, res) => {
    try {
        const menu = await Menu.find({}).sort({ category: 1, price: 1 });
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Returns menu with currency of users choice
app.get('/menu/:currency', async(req, res) => {
    try {

        const menu = await Menu.find({}).sort({ category: 1, price: 1 });
        const {currency} = await req.params;

        // Check if currency is valid and update the menu
        for (let i in menu) {
            var x = await fetch(`https://api.apilayer.com/fixer/convert?to=${currency}&from=eur&amount=${menu[i]["price"]}`, requestOptions);
            let y = await x.text()

            if (y.includes('error')) {
                const errorType = y.slice( y.search("type") + 'type" '.length + 1, y.search("info") - 11 );
                const errorCode = Number( y.slice( y.search("code") + 'type" '.length + 1, y.search("type") - 11 ));
                res.status(errorCode).json({message: errorType});
            } else {
                let newPrice = Number(y.slice(y.search("result") + 'result" '.length + 1, y.length - 3));
                menu[i]["price"] = newPrice;
            }
        }

        res.status(200).json(menu);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Returnns orders for merchant
app.get('/orders', async(req, res) => {
    try {
        const orders = await Orders.getMenu().find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Makes order for customer
app.post('/ordering', async(req, res) => {
    try {
        let total_price = 0;
        let this_order = req.body;

        // Compute the total price and update it
        for (let i in this_order['order']) {
            var this_price = await Menu.find({name: this_order['order'][i]}, {_id:0, price:1});
            total_price += this_price[0]['price'];
        }
        this_order['price'] = total_price

        // Insert the order in Orders
        const order = await Orders.create(this_order);
        res.status(200).json(order);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Connect to Mongodb
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

// Initiate the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
