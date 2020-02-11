const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');


const SliderSchema = new Schema({
    title: { type: String, required: true },
    caption: { type: String, required: true },
    imageurl: { type: String, required: true }
})

SliderSchema.plugin(timestamps);
SliderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Slider', SliderSchema);