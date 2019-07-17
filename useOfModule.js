var express= require('express');
var msg = require('./maths.js');
var app = express();


app.get('/addFunction/:num1/:num2',function(req,res,next)
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

});

app.get('/squareFunction/:num1',function(req,res)
{
    let num1 = parseFloat(req.params.num1);
    
});

app.get('/powerFunction/:num1/:num2',function(req,res)
{
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
   
});

app.get('/squareRootFunction/:num1/',function(req,res)
{

    let num1 = parseInt(req.params.num1);
   
});

app.listen('3000');

