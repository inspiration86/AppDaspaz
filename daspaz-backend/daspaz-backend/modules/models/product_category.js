const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');

const ProductCategorySchema = new Schema({
    category_name: { type: String, required: true },
    sub_category: { type: String, required: true }

})

ProductCategorySchema.plugin(timestamps);
ProductCategorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);