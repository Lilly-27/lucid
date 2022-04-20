const review = require('../models/reviews-model')
const seedData = require('./reviews.json')

review.deleteMany({})
    .then(() => {
        return review.insertMany(seedData)
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        process.exit()
    });