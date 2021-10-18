const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

let products = [{
        id: 1,
        name: "Samsung",
        price: 900,
        description: "Samsung s10."
    }, {
        id: 2,
        name: "Iphone",
        price: 1300,
        description: "Iphone 12 pro max."
    },
    {
        id: 3,
        name: "xiaomi",
        price: 500,
        description: "Xiaomi phone."
    }
];


let shoppingCart = [];

app.get('/', (req, res) => {
    res.render("shop", {
        products: products
    });
});

app.get("/product", (req, res) => {
    let selectedProduct = products.find(x => x.id == req.query.id);
    res.render("product", { product: selectedProduct });
});


app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;

    let selectedProduct = shoppingCart.find(x => x.name == name);
    let newProd;

    if (selectedProduct != null || selectedProduct != undefined) {
        selectedProduct.quantity += 1;
    } else {
        newProd = {
            name: name,
            price: price,
            quantity: 1,

        }
        shoppingCart.push(newProd);
    }

    res.redirect('/cart');
});


app.get("/cart", (req, res) => {
    res.render("shoppingcart", { shoppingCart: shoppingCart });
});

app.listen(3000, () => console.log('localhost:3000'));