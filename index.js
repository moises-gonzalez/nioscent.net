const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('appName', 'appServer');
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('short'));

//Routing
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('*', (req, res) => {
    res.end('Not found!!')
});

app.listen(3000, ()=> {
    console.log('Server working!');
    console.log('App Name', app.get('appName'))
});


