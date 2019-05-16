var express = require('express');
var bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const path = require('path');

 
// serveur html
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//import routes
const postsRoute = require('./src/posts');
app.use('/posts', postsRoute);

const douanierRoute = require('./src/douanier');
app.use('/douanier', douanierRoute);

const operateurRoute = require('./src/operateur');
app.use('/operateur', operateurRoute);

app.get('/', (req, res) =>
  res.render('index')
);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(80);
// var email;
 
// server.post('/post.html', function(request, response) {
//   var p1 = request.body.p1; 
//   email = request.body.email; 

//   console.log("p1=" + p1);
//   console.log("email=" + email);
// });



//app.listen(5555);