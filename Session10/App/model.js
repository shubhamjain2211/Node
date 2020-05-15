const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    isSanatized: Boolean,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }

});

itemSchema.pre('find', (next) => {
   
    if (true) {
        next();
    }
});

itemSchema.post('find', function (data) {
    data.value = 'Addeed from post middleware ';
});
itemSchema.post('init', function (doc) {
    console.log('%s has been initialized from the db', doc._id);
});

const ItemModel = mongoose.model('Items', itemSchema);
module.exports = ItemModel;