var express = require ('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients = [
    {
        "id":"223ed",
        "text":"Milk"
    },
    {
        "id":"133ed",
        "text":"Bacon"
    },
    {
        "id":"78jid",
        "text":"Butter"
    }
];

app.get('/', function(req, res){
    res.send(ingredients);
});

app.post('/', function(req, res){
    var ingredient = req.body;
    if(!ingredient || ingredient.text === ""){
        res.status(500).send({error:"Your ingredients most have a text"});
    }else{
        ingredients.push(ingredient);
        res.status(200).send(ingredient);
    }
});

app.listen(3000, function(){
    console.log('First API Rnning on port 3000!')
});