const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const app =express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

var item = ["HELLO","Tata","Start"]

let list=[]

app.get("/",function(req,res){
    today=date.getDate()
    res.render("index",{title:today,list:item});
});

app.post("/",function(req,res){
    var work=req.body.work;
    if(req.body.btn==="Work"){
       if(work.length){
        list.push(work)
       }
       res.redirect("/work")
    }else{
       if(work.length){
        item.push(work)
       }
       res.redirect("/")
    }
});

app.get("/work",function(req,res){
    res.render("index",{title:"Work List",list:list})
})

app.listen(3000,function(req,res){
    console.log("Server is on port 3000")
});