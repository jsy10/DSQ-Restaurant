# DSQ Restaurant

## Introduction

For this assignment I was asked to make the back-end, using Node.js & MongoDB, of an online delivery application that allows guest users to view items & submit orders.
I made a database in http://mongodb.com with 2 collections, 1 for menus that contains 4 document (id, name, category, price) and 1 dor the orders that contains 8 documents
(id, name, address, order, price, payment, createdAt, updatedAt).


## Menu

The online delivery shop DSQ Restaurant allows the user to take a look at the Restaurant's menu (route: /menu) that consists of many dished-drinks from 5 categories (Appetizer, Beers, Drinks, Main Dish, Salad) and the default price is in Euros.
Also on route: /menu/currency the user can type the currency he/she prefers to convert the prices of the menu to that currency (ex. route: /mene/gbp).
This is possible through a publicly availiable API (http://fixer.io).


## Order

The guest can make an order from menu throw a JSON post request (I use Insomnia: https://insomnia.rest/ for this matter). 
This request must be an Object that includes 2 strings ("name", "address") and 1 string or array of strings ("order") with names of dishes-drinks from menu, it is not mandatory to put a way of payment ("cash", "card", "coupons") as it's default value will be "cash".

The merchant is able to view the incoming orders as the hole orders collection is been shown on route /orders.


## Other

Thank you for taking the time to read the README.md