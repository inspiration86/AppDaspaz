const Transform = require('./../Transform');

module.exports = class ProductsellernewTransform extends Transform {

    transform(item) {

        return {
            'category_name': item.category_name,
            'productname': item.productname,
            'deatilproduct': item.deatilproduct,
            'price': item.price,
            'countproduct': item.countproduct,
            'description': item.description,
            'productimageurl': item.productimageurl

        }
    }

}