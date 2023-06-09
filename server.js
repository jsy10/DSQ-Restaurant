const express = require("express");
const mongoose = require("mongoose");
const Menu = require('./models/menuModel');
const Orders = require('./models/ordersModel')
const app = express();
const uri = "mongodb+srv://jgsimeonidis:kwdikos@cluster0.flkabzj.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())

var myHeaders = new Headers();
myHeaders.append("apikey", "dQ7JOk70RA4mytmGHqFxNm71nF0q5LHy");

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

            let curr = await fetch(`https://api.apilayer.com/fixer/convert?to=${currency}&from=eur&amount=${menu[i]["price"]}`, requestOptions);
            curr = await curr.text() 
            curr = JSON.parse(curr)
            console.log(curr)

            if (curr["success"] == false) {
                res.status(curr["error"]["code"]).json({message: curr["error"]["type"]});
            } else {
                menu[i]["price"] = curr["result"];
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
        const orders = await Orders.find({});
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
        let this_price;

        // Compute the total price and update it
        if (typeof(this_order["order"]) == "string") {

            // The total price of this order is the price of the sting in order
            this_price = await Menu.find({name: this_order['order']}, {_id:0, price:1});
            total_price = this_price[0]['price'];

        }
        else {

            // The total price of this order is the sum of prices of the array in order
            for (let i in this_order['order']) {
                this_price = await Menu.find({name: this_order['order'][i]}, {_id:0, price:1});
                total_price += this_price[0]['price'];
            }
        
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
