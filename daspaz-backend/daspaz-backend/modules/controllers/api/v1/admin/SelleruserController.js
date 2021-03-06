const Controller = require(`${config.path.controller}/Controller`);
const SelleruserTransform = require(`${config.path.transform}/v1/SelleruserTransform`);

module.exports = new class SelleruserController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1;
    //     this.model.Selleruser.paginate({} , { page , limit : 10,sort:{createdAt:'desc'}}).then(result => {
    //         if(result) {
    //             return res.json({
    //                 data : new SelleruserTransform().withPaginate().transformCollection(result),
    //                 success : true
    //             });
    //         }
    //         res.json({
    //             message : ' خریداری وجود ندارد',
    //             success : false
    //         })
    //     })
    //         .catch(err => console.log(err));
    // }

    index(req, res) {
        this.model.SellerUser.find({}).sort({ firstname: -1 }).exec((err, selleruser) => {
            if (err) throw err;
            if (selleruser) {
                return res.json({
                    data: selleruser,
                    success: true
                });
            }
            res.json({
                data: 'هیچ فروشنده ای وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.SellerUser.findById(req.params.id, (err, selleruser) => {
            if (selleruser) {
                return res.json({
                    data: selleruser,
                    success: true
                })
            }
            res.json({
                data: 'خریداری یافت نشد',
                success: false
            })
        })
    }

  

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.SellerUser.findByIdAndRemove(req.params.id, (err, selleruser) => {
            if (err) throw err;
            if (selleruser) {
                return res.json({
                    data: 'فروشنده با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین فروشنده ای وجود ندارد',
                success: false
            });
        });
    }
  
}