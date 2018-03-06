//main application
 const express = require("express");
 const app = express();
 const nunjucks = require("nunjucks");

// config
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//log any URI
const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public')) // serve up CSS file


//listen to a port
const port = 3000;

app.listen(port, function() {
  console.log(`Server running on port ${3000}!`);
});
