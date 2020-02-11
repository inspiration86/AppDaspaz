const Controller = require(`${config.path.controller}/Controller`);
const ProductCategoryTransform = require(`${config.path.transform}/v1/ProductCategoryTransform`);

module.exports = new class ProductCategoryController extends Controller {
    index(req, res) {
        this.model.ProductCategory.find({}).sort({ category_name: -1 }).exec((err, productCategory) => {
            if (err) throw err;
            if (productcategory) {
                return res.json({
                    data: productcategory,
                    success: true
                });
            }
            res.json({
                data: 'هیچ دسته بندی وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.ProductCategory.findById(req.params.id, (err, productcategory) => {
            if (productcategory) {
                
                return res.json({
                    data: productcategory,
                    success: true
                })
           
        }
            res.json({
                data: 'دسته بندی محصول یافت نشد',
                success: false
            })
        })
    }

 
  }
