const mongoose = require('mongoose')

const menuSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    }
)

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
