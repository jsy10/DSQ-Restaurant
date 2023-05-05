const express=require("express");
const mongoose = require('mongoose')
const Menu = require('./menuModel')

const app = express();

// const MENU = require('Menu.csv')

const MENU = await Menu.find({}, {name:1, _id:0})

console.log(MENU)

const ordersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        order: {
            type: Array(String),
            enum: MENU,
            required: true
        },

        price: {
            type: Number,
            incremented: false,
            // value: 1,
            default: 0
        },

        payment: {
            type: String,
            enum: ['cash', 'card', 'coupons'],
            required: true,
            default: 'cash'
        }
    },
    {
        timestamps: true
    }
)


const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
