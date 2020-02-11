// Model
const AdminUser = require(`${config.path.model}/admin_user`);
const CustomerUser = require(`${config.path.model}/customer_user`);
const Comment = require(`${config.path.model}/comment`);
const Answer = require(`${config.path.model}/answer`);
const SellerUser = require(`${config.path.model}/seller_user`);
const AbilitySeller = require(`${config.path.model}/ability_seller`);
const ProductCategory = require(`${config.path.model}/Product_category`);
const ProductSellerNew = require(`${config.path.model}/product_seller_new`);
const CartCustom = require(`${config.path.model}/cart_custom`);
const City = require(`${config.path.model}/city`);
const Country = require(`${config.path.model}/country`);
const Slider = require(`${config.path.model}/slider`);
const Province = require(`${config.path.model}/province`);


module.exports = class Controller {
    constructor() {
        this.model = { AdminUser, CustomerUser, Comment, Answer, SellerUser, AbilitySeller, ProductCategory, ProductSellerNew, CartCustom, City, Country, Slider, Province }
    }
    showValidationErrors(req, res, callback) {
        let errors = req.validationErrors();
        if (errors) {
            res.status(422).json({
                message: errors.map(error => {
                    return {
                        'field': error.param,
                        'message': error.msg
                    }
                }),
                success: false
            });
            return true;
        }
        return false
    }


    escapeAndTrim(req, items) {
        items.split(' ').forEach(item => {
            req.sanitize(item).escape();
            req.sanitize(item).trim();
        });
    }
}