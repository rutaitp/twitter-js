//main application
 const express = require("express");
 const app = express();

// CHANGES!!!!!!

//log any URI
app.use(function(req, res, next){
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", function(req, res){
  res.send("Welcome!");
});

app.get("/news", function(req, res){
  res.send("News suck!");
});


//listen to a port
const port = 3000;

app.listen(port, function() {
  console.log(`Server running on port ${3000}!`);
});
