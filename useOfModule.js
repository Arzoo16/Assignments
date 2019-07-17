var express= require('express');
var msg = require('./js_modules.js');
var app = express();


app.get('/addFunction/:num1/:num2',function(req,res)
{
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    var add=msg.addFunction(num1,num2);
    res.send(add);

});

app.get('/multiFunction/:num1/:num2',function(req,res)
{
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    var multi=msg.multiFunction(num1,num2);
    res.send(multi);


});

app.get('/squareFunction/:num1',function(req,res)
{
    let num1 = parseFloat(req.params.num1);
    var square=msg.squareFunction(num1);
    res.send(square);

    
});

app.get('/powerFunction/:num1/:num2',function(req,res)
{
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    var pow=msg.powerFunction(num1,num2);
    res.send(pow);
   
});

app.get('/squareRootFunction/:num1/',function(req,res)
{

    let num1 = parseInt(req.params.num1);
    var squareRoot=msg.squareRootFunction(num1);
    res.send(squareRoot );
   
});

app.listen('3000');

