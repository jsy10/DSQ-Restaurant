# DSQ Restaurant

## Introduction

For this project I was assigned to create the back-end, using Node.js & MongoDB, of an online delivery application that allows guest-users to view items & submit orders.
I made a database in http://mongodb.com with 2 collections, 1 for menu that contains 4 document (id, name, category, price) and 1 for the orders that contains 8 documents
(id, name, address, order, price, payment, createdAt, updatedAt).


## Build Instructions

To initiate this project you need to have Node.js (npm) installed, mongoose-npm (https://www.npmjs.com/package/mongoose) and express-npm (https://www.npmjs.com/package/express).
To run the code write ($ npm run serve) which start the Server on port 3000, and then connects to MongoDB (my DB is public for any IP). The routes that are available are: 
1). / for welcoming you to the restaurant,
2). /menu for Menu,
3). /menu/currency Currency is a parameter,
4). /orders for mechant to review orders and
5). /ordering to place an order


## Menu

The online delivery shop DSQ Restaurant allows the user to take a look at the Restaurant's menu (route: /menu) that consists of many dished-drinks from 5 categories (Appetizer, Beers, Drinks, Main Dish, Salad) and the default price is in Euros.
Also on route: /menu/currency the user can type the currency he/she prefers to convert the prices of the menu to that currency (ex. route: /menu/gbp).
This is possible through a publicly available API (http://fixer.io).


## Order

The guest can make an order from menu throught a JSON post request (I use Insomnia: https://insomnia.rest/ for this matter). 
This request must be an Object that includes 2 strings ("name", "address") and 1 string or array of strings ("order") with names of dishes-drinks from menu, it is not mandatory to choose a way of payment ("cash", "card", "coupons") as it's default value will be "cash".

The merchant is able to view the incoming orders as the whole orders collection is been shown on route /orders. I have already placed some orders so the collection is not empty.
