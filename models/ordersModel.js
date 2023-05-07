const express = require("express");
const mongoose = require('mongoose');
const Menu = require('./menuModel');

const app = express();

app.use(express.json())

// async function getMenu() {
//     try {
//         mm = await Menu.find({}, {name:1, _id:0});
//         console.log(mm);
//         return mm
//     } catch(error) {
//         console.log('error: ' + error)
//     }    
// };

// const menu = getMenu();
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
// console.log('menu:  ' + menu)

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
            enum: ["Andromeda", "Riganada", "Elliniki", "Pansetakia", "Mprizolakia", "Tigania Kotopoulo", 
                "Tigania Xoirini", "Saganaki", "Kolokithokeftedes", "Tirokroketes", "Sfakiani pita", "Feta",
                "Alpha", "Bergina", "Mamos", "Kokkino Krasi", "Leuko Krasi", "Nero", "Tsipouro",],
            // enum: menu,
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
