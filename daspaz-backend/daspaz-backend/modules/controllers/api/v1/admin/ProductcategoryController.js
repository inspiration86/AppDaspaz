const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class ProductcategoryController extends Controller {
    index(req, res) {
        this.model.ProductCategory.find({}).sort({ category_name: -1 }).exec((err, productcategory) => {
            if (err) throw err;
            if (productcategory) {
                return res.json({
                    data: productcategory,
                    success: true
                });
            }
            res.json({
                data: 'هیچ اطلاعاتی وجود ندارد',
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
                data: 'یافت نشد',
                success: false
            })
        })
    }

    store(req, res) {
        req.checkBody('category_name', ' نام دسته محصولات نمیتواند خالی بماند').notEmpty();
        req.checkBody('sub_category', 'زیردسته ها نمیتواند خالی بماند').notEmpty();

        this.escapeAndTrim(req, 'id_productcategory sub_category');
        if (this.showValidationErrors(req, res))
            return;
        let newProductCategory = new this.model.ProductCategory({
            category_name: req.body.category_name,
            sub_category: req.body.sub_category
        })
        newProductCategory.save(err => {
            if (err) throw err;
            res.json('دسته بندی جدید با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.ProductCategory.findByIdAndUpdate(req.params.id,
            {
                category_name: req.body.category_name,
                sub_category: req.body.sub_category
            },
            (err, productcategory) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.ProductCategory.findByIdAndRemove(req.params.id, (err, productcategory) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}