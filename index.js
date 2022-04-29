const express = require('express')
const path = require('path');
const ejsLayout = require('express-ejs-layouts')
const methodOverride = require('method-override')
const reviewControllers = require('./controllers/reviewControllers')

const app = express();
const ejs = require('ejs');

app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(ejsLayout)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.get("/", (req,res) => {
    res.redirect('/home')
})
app.use('/home', reviewControllers);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('Yes! We are running on port 4000')
});