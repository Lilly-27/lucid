const express = require('express');
const req = require('express/lib/request');

const Review = require('../models/reviews-model')

const router = express.Router();

router.get('/', (req,res) => {
    Review.find({})
    .then((items) => res.render('index', {stuff:items}))
    .catch(console.error)
});

router.post('/add', (req,res) => {
    Review.create(req.body)
    .then(() => res.redirect('/home'))
    .catch(console.error)
});


router.get('/new', (req, res) => {
    res.render('new')
    // .catch(console.error)
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
    .then(items => res.render('view', {company:items}))
    .catch(console.error)
});

router.get('/:id/edit', (req, res) => {
    Review.findById(req.params.id)
    .then(items => {res.render('edit', items)})
    .catch(console.error)
});


router.delete('/:id/remove', (req, res) => {
    Review.findOneAndRemove({_id: req.params.id})
    .then((items) => res.redirect('/home'))
    .catch(console.error)
});

router.put('/:id/update', (req,res) => {
    Review.findOneAndUpdate({_id: req.params.id}, req.body)
    .then((items) => res.redirect('/home'))
    .catch(console.error)
});


module.exports = router;