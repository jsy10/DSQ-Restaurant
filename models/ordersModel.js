const express=require("express");
const mongoose = require('mongoose');
// const Menu = require('./menuModel');

// const app = express();

// app.use(express.json())


// async function getMenu() {
//     try {
        // mm = await Menu.find({}, {name:1, _id:0});
        // console.log(mm);
//     } catch(error) {
//         console.log('error: ' + error)
//     }    
// }    
        // MENU = await Menu.find({}, {name:1, _id:0});

        // const MENU = await getMenu()
        // let mm = 0;

        // getMenu(mm);

        // const MENU = Menu.find({}, {name:1, _id:0}).then(response => {console.log(response)}).catch(error => { console.error('error: ' + {error})})
        // let mm = [];
        // for (let i in MENU) {
        //     console.log(MENU[i]['name'])
        //     mm[i] = MENU[i]['name'];
        // }
        // console.log('menu:  ' + mm)

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
            enum: ["Andromeda", "misos krasos", "pansetakia"],
            // enum: mm,
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

//     } catch(error) {
//         console.log('error: ' + error)
//     }    
// }

// getMenu();
