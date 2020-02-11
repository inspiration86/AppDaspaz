const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class CityController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.City.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new CityTransform().withPaginate().transformCollection(result),
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
        this.model.City.find({}).sort({city_name: -1 }).exec((err, city) => {
            if (err) throw err;
            if (city) {
                return res.json({
                    data: city,
                    success: true
                });
            }
            res.json({
                data: 'چنین شهری وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.City.findById(req.params.id, (err, city) => {
            if (city) {
                return res.json({
                    data: city,
                    success: true
                })
            }
            res.json({
                data: 'یافت نشد',
                success: false
            })
        })
    }

   
}