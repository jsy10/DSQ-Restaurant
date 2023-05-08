const mongoose = require('mongoose');

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
            type: [String],
            enum: ["Andromeda", "Riganada", "Elliniki", "Pansetakia", "Mprizolakia", "Tigania Kotopoulo", 
                "Tigania Xoirini", "Saganaki", "Kolokithokeftedes", "Tirokroketes", "Sfakiani pita", "Feta",
                "Alpha", "Bergina", "Mamos", "Kokkino Krasi", "Leuko Krasi", "Nero", "Tsipouro",],
            required: true
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        payment: {
            type: String,
            enum: ['cash', 'card', 'coupons'],
            required: true,
            default: 'cash'
        },

        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        },

        updatedAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        }
    }
)


const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
