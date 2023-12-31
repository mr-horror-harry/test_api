const mongoose = require('mongoose')

const test_data = mongoose.Schema({
    test_id:{
        type: String,
        required:true,
        unique:true,
    },
    test_name:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('db_api_test', test_data)