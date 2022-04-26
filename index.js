const express = require('express')
const path = require('path');
const methodOverride = require('method-override')
const reviewControllers = require('./controllers/reviewControllers')

const app = express();
const ejs = require('ejs');


// app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(reviewControllers);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('Yes! We are running on port 4000')
});