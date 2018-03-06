//main application
 const express = require("express");
 const app = express();
 const nunjucks = require("nunjucks");

 var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

// config
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//log any URI
app.use(function(req, res, next){
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", function(req, res){
  res.render('index', {title: locals.title, people: locals.people});
});

app.get("/news", function(req, res){
  res.send("News suck!");
});


//listen to a port
const port = 3000;

app.listen(port, function() {
  console.log(`Server running on port ${3000}!`);
});
