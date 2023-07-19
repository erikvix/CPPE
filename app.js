const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs')


app.get('', function(req,res){
    res.render('index')
})

app.get('/db', function(req, res){
    res.render('db')
})
app.post('/db', urlencodedParser, function(req, res){
    res.json(req.body)
})

app.listen(8081, () => console.log('APP RUNNING: http://localhost:8081'))