const express = require('express');
const app = express();
app.use(express.static("assets"))
const port = 3000; 

app.set("assets", "./assets")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/gible', function (req, res) {
    res.render('template', {title: 'Gible'})
});

app.use('/cubone', function (req, res) {
    res.render('template', {title: 'Cubone'})
});

app.use('/pikachu', function (req, res) {
    res.render('template', {title: 'Pikachu'})
});

app.use('/squirtle', function (req, res) {
    res.render('template', {title: 'Squirtle'})
});

app.listen(port, () => console.log(`Successfully ran code`))