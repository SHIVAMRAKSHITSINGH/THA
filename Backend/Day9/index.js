const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname)

app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");
app.use('/', (req,res) => {
  // res.sendFile(path.join(__dirname,"public/test.json"))
  // res.sendFile(path.join(__dirname,"public/toxin.jpg"))
  // res.download(path.join(__dirname,"public/toxin.jpg"),"toxin.jpg")
  // res.render('index', {title : "Express"})
  res
  .status(201)
  .cookie("token","toxin", {
    expire: new Date(Date.now()+ 8*3600000)
  })
  .cookie("hello","Shivam rakshit singh")
  .redirect(301,"/admin")
})
app.listen(5000);