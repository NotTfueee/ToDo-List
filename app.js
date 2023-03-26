

const express = require('express');

const bodyParser = require('body-parser');

const date = require(__dirname+"/date.js"); // here we're requiring a local module that we've created and to require it this is the syntax  

// console.log(date()); // we've added the () so that the function that is defined inside the date.js gets activated 

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public")) // this is used here to send all the files required to load onto the server and this folder includes all the files neccesary like css 

app.set('view engine','ejs'); // this is to use ejs modules into our website


var itemArray = [];
var workArray = [];



app.get('/', function(req,res)
{

    //now to get hold of the day value inside app.js we need to assign it to a variable 
    let day = date.getDate();
    res.render('list', {listTitle : day , newListItem : itemArray})
})

app.post("/",function(req,res)
{
    
    var item = req.body.newItem;
    
    if(req.body.list === "Work"){

        workArray.push(item);
        res.redirect("/work");
    }
    else
    {     
        itemArray.push(item);
        res.redirect("/");
    }
    


})


app.get("/work", function(req,res)   // get method is used to get the files for the specified location from the server 
{
    res.render("list",{listTitle : "Work" , newListItem : workArray});
})

app.post("/work", function(req,res) // post method is used to post the items to the server which the user has entered
{
    var item = req.body.newItem;
    
    workArray.push(item);
    
    res.redirect("/work");  // this function what it does is it redirects as soon as we press the submit button so we dont need to refresh the website again and again
})

app.get('/about',function(req,res)
{
    res.render("about");
})


app.listen(process.env.PORT || 3000, function()
{
    console.log("Listening on Port 3000");
})