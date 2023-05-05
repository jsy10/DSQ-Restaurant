const express=require("express");
const mongoose = require("mongoose");
const Menu = require('./models/menuModel')
const Orders = require('./models/ordersModel')
const app = express();

const uri = "mongodb+srv://jgsimeonidis:kwdikos@cluster0.flkabzj.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())

// route
app.get('/', (req, res) => {
    res.send('Hello!')
})



app.get('/innit_db', (req, res) => {
    // piata = [{ name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 },
    //         { name: "fai", category: "kapoia", price: 10 }]
    // const menu = new Menu({
    //     name: 'Andromeda',
    //     category: 'Appetizers',
    //     price: 5.9
    // });
    // menu.save().then((result) => {
    //     res.send(result);
    // }).catch((err) => {
    //     console.log(err);
    // })
    // const menu1 = new Menu({
    //     name: 'misos krasos',
    //     category: 'Drinks',
    //     price: 4.5
    // });
    // menu1.save().then((result) => {
    //     res.send(result);
    // }).catch((err) => {
    //     console.log(err);
    // })

    const menu = new Menu({
        name: 'pansetakia',
        category: 'Main_dishes',
        price: 5.5
    });
    menu.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
    

})




app.get('/menu', async(req, res) => {
    try {
        // const Appetizers = await Menu.find({category: "Appetizers"});
        // const Drinks = await Menu.find({category: "Drinks"});
        // const Main_dishes = await Menu.find({category: "main_dishes"});
        // console.log('Appetizers');
        // res.status(200).json(Appetizers);
        // console.log('Drinks');
        // res.status(200).json(Drinks);
        // console.log('Main_dishes');
        // res.status(200).json(Main_dishes);
        const menu = await Menu.find({}).sort({ category: 1, price: 1 });
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/orders', async(req, res) => {
    try {
        const orders = await Orders.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// app.get('/orders/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const order = await Orders.findById(id);
//         res.status(200).json(order);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

app.post('/ordering', async(req, res) => {
    try {
        let total_price = 0;
        let this_order = req.body;

        // compute the total price 
        for (let i in this_order['order']) {
            var this_price = await Menu.find({name: this_order['order'][i]}, {_id:0, price:1});
            total_price += this_price[0]['price'];
        }

        this_order['price'] = total_price

        const order = await Orders.create(this_order)
        res.status(200).json(order);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
