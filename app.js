var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var env = require('dotenv');
const swaggerUi = require('swagger-ui-express');
env.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var drinksRouter = require('./routes/drinks');
var ingredientsRouter = require('./routes/ingredients');
var categoriesRouter = require('./routes/categories');
var glassesRouter = require('./routes/glasses');

const relate = require('./database/relationships');
const swaggerFile = require('./services/swagger');
const specs = require('./services/swagger');
const { authMiddleware } = require('./services/auth');

var app = express();
app.use(cors());

relate()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true})
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/categories', categoriesRouter)
app.use('/glass', glassesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
