const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://jgsimeonidis:kwdikos@cluster0.flkabzj.mongodb.net/?retryWrites=true&w=majority"

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


piata = 
        [{ name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 },
        { name: "fai", category: "kapoia", price: 10 }];


for (let piato in piata) {
    let order = await Orders.insertOne(piato)
    res.status(200).json(order);
}

