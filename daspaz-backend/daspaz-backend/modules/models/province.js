const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');


const ProvinceSchema = new Schema({
    province_name: { type: String, required: true }
})

ProvinceSchema.plugin(timestamps);
ProvinceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Province', ProvinceSchema);