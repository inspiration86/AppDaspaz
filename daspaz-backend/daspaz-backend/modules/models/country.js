const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');


const CountrySchema = new Schema({
    country_name: { type: String, required: true }
})

CountrySchema.plugin(timestamps);
CountrySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Country', CountrySchema);