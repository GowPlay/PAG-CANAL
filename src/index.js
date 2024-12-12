const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
app.set('port', process.env.PORT || 4200);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json(({extended: true})));

app.use((req, res, next) => {
    next();
})

// rutas app
app.use(require('./routes/app'));


app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
});

