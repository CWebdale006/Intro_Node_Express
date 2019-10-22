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
    res.send('<title>Gible</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card"><div class="card-body"><div class="col-1-2"><div id="sprite" align="center"></div></div><div class="col-1-2" id="text"><h5 class="card-title" align="center"></h5><p class="card-text" align="center"></p></div><div class="col-1-1"><div align="center"><a href="http://localhost:3000/" class="btn btn-secondary">Back</a></div></div></div></div><script src="pokemon.js"></script>')
});

app.use('/cubone', function (req, res) {
    res.send('<title>Cubone</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card"><div class="card-body"><div class="col-1-2"><div id="sprite" align="center"></div></div><div class="col-1-2" id="text"><h5 class="card-title" align="center"></h5><p class="card-text" align="center"></p></div><div class="col-1-1"><div align="center"><a href="http://localhost:3000/" class="btn btn-secondary">Back</a></div></div></div></div><script src="pokemon.js"></script>')
});

app.use('/pikachu', function (req, res) {
    res.send('<title>Pikachu</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card"><div class="card-body"><div class="col-1-2"><div id="sprite" align="center"></div></div><div class="col-1-2" id="text"><h5 class="card-title" align="center"></h5><p class="card-text" align="center"></p></div><div class="col-1-1"><div align="center"><a href="http://localhost:3000/" class="btn btn-secondary">Back</a></div></div></div></div><script src="pokemon.js"></script>')
});

app.use('/squirtle', function (req, res) {
    res.send('<title>Squirtle</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card"><div class="card-body"><div class="col-1-2"><div id="sprite" align="center"></div></div><div class="col-1-2" id="text"><h5 class="card-title" align="center"></h5><p class="card-text" align="center"></p></div><div class="col-1-1"><div align="center"><a href="http://localhost:3000/" class="btn btn-secondary">Back</a></div></div></div></div><script src="pokemon.js"></script>')
});

app.use('/user', function (req, res) {
    res.send(`<title>Squirtle</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><div class="card"><div class="card-body"><div class="col-1-2"><div id="sprite" align="center"></div></div><div class="col-1-2" id="text"><h5 class="card-title" align="center"></h5><p class="card-text" align="center"></p></div><div class="col-1-1"><div align="center"><a href="http://localhost:3000/" class="btn btn-secondary">Back</a></div></div></div></div><script src="pokemon.js"></script>`)
});

app.listen(port, () => console.log(`Successfully ran code`))