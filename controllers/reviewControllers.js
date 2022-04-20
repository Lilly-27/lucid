const express = require('express');
const req = require('express/lib/request');

const Review = require('../models/reviews-model')

const router = express.Router();

router.get('/', (req,res) => {
    Review.find({})
    .then((items) => res.render('index', {stuff:items}))
});

router.post('/add', (req,res) => {
    Review.create(req.body)
    .then(() => res.redirect('/'))
});

router.delete('/:id', (req, res) => {
    Review.findOneAndRemove({_id: req.params.id}).then((items) => res.redirect('/'))
});

router.put('/:id', (req,res) => {
    Review.findOneAndUpdate({_id: req.params.id}, req.body).then((items) => res.redirect('/'))
});

router.get('/new', (req, res) => {
    res.render('new')
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id).then(items => 
        {res.render('edit', items)})
});

module.exports = router;