var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*Routers*/
var index = require('./routes/index');
var users = require('./routes/users');
var login=require('./routes/login');
var log_out=require('./routes/log-out');
var register=require('./routes/register');
var information=require('./routes/information');
var shopping_cart=require('./routes/shopping-cart');
var order=require('./routes/order');
var products=require('./routes/products');

var clubJersey=require('./routes/clubJersey');
var nationalTeamJersey=require('./routes/nationalTeamJersey');


var footballShoes=require('./routes/footballShoes');

var footballBrand=require('./routes/football-brand');

var itemOperations=require('./routes/itemOperations');

var content=require('./routes/content');

var shoesEvaluation=require('./routes/shoesEvaluation');
var teamLogoEmblem=require('./routes/teamLogoEmblem');
var fanForum=require('./routes/fan-forum');
var news=require('./routes/news');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login',login);
app.use('/log-out',log_out);
app.use('/register',register);
app.use('/register-succeed',register);
app.use('/information',information);
app.use('/shopping-cart',shopping_cart);
app.use('/order',order);


app.use('/clubJersey',clubJersey);
app.use('/nationalTeamJersey',nationalTeamJersey);

app.use('/footballShoes',footballShoes);

app.use('/football-brand',footballBrand);

app.use('/content',content);

app.use('/item',itemOperations);

app.use('/shoes-evaluation',shoesEvaluation);
app.use('/team-logo-emblem',teamLogoEmblem);
app.use('/fan-forum',fanForum);
app.use('/news',news);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
