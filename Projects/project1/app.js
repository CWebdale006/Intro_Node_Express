const express = require('express');
const app = express();
app.use(express.static("assets"))
const port = 3000; 

app.set("assets", "./assets")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Pokemon!'})
});

app.use('/gible', function (req, res) {
    res.render('gibleP', {title: 'Gible'})
});

app.use('/cubone', function (req, res) {
    res.render('cuboneP', {title: 'Cubone'})
});

app.use('/pikachu', function (req, res) {
    res.render('pikachuP', {title: 'Pikachu'})
});

app.use('/squirtle', function (req, res) {
    res.render('squirtleP', {title: 'Squirtle'})
});

app.listen(port, () => console.log(`Successfully ran code`))