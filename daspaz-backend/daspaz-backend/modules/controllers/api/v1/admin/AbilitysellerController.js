const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class AbilitySellerController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.AbilitySeller.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new AbilitySellerTransform().withPaginate().transformCollection(result),
    //                     success : true
    //                 });
    //             }
    //
    //             res.json({
    //                 message : 'اطلاعاتی وجود ندارد',
    //                 success : false
    //             })
    //         })
    //
    //         .catch(err => console.log(err));
    //
    // }
    index(req, res) {
        this.model.AbilitySeller.find({}).sort({ id_seller: -1 }).exec((err, abilityseller) => {
            if (err) throw err;
            if (abilityseller) {
                return res.json({
                    data: abilityseller,
                    success: true
                });
            }
            res.json({
                data: 'چنین توانمندی وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.AbilitySeller.findById(req.params.id, (err, abilityseller) => {
            if (abilityseller) {
                return res.json({
                    data: abilityseller,
                    success: true
                })
            }
            res.json({
                data: 'یافت نشد',
                success: false
            })
        })
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.AbilitySeller.findByIdAndRemove(req.params.id, (err, abilityseller) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}