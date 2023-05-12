const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/module.js");
const app = express();

app.set('view engine', 'ejs');

let array = ["Food", "Food1", "Food2"];
let workItems=[];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let presentDay = date.getday();
  res.render("list", {
    currentdate: presentDay,
    newItems: array
  });

});

app.post("/", function(req, res) {

  let item = req.body.newItem
if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
}else{
  array.push(item);
  res.redirect("/");
}



})

app.get("/work",function(req,res){

  res.render("list",{
    currentdate: "Work",
    newItems:workItems
  })
})

// app.post("/work",function(req,res){
// let item = req.body.newItem;
// workItems.push(item);
// res.redirect("/work");
//
// })

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
