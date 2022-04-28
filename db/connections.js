const mongoose = require('mongoose');

const cString = "mongodb+srv://cecilia1:cecilia1@cluster0.vpw3n.mongodb.net/lucidDB?retryWrites=true&w=majority"

mongoose.connect(cString);

module.exports = mongoose;