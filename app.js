//main application
 const express = require("express");
 const app = express();
 const nunjucks = require("nunjucks");
 const bodyParser = require('body-parser')

// config

//app.use - if request comes in, deal with it, middleware function
app.use(bodyParser.urlencoded({ extended: false })); //for HTML form submits
app.use(bodyParser.json()); //for ajax request

nunjucks.configure('views', {noCache: true}); //look at the "views" folder
app.set('view engine', 'html'); //add html extension to all the files
app.engine('html', nunjucks.render);

//log any URI
const routes = require('./routes');
app.use('/', routes); //when anything with / comes in, look at the routes
app.use(express.static('public')) // serve up CSS file


//listen to a port
const port = 3000;
app.listen(port, function() {
  console.log(`Server running on port ${port}!`);
});
