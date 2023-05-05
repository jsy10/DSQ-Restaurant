const mongoose = require('mongoose')

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
        floor: {
            type: Number,
            required: true
        },
        // piata kai quantity
        order: {
            type: Array(Array(2)),
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
