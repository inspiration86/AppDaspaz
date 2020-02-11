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
        this.model.City.find({}).sort({ city_name: -1 }).exec((err, city) => {
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

    store(req, res) {
        req.checkBody('city_name', ' نام شهر نمیتواند خالی بماند').notEmpty();
        

        this.escapeAndTrim(req, 'city_name');
        if (this.showValidationErrors(req, res))
            return;
        let newCity = new this.model.City({
            city_name: req.body.city_name

        })
        newCity.save(err => {
            if (err) throw err;
            res.json('شهر جدید با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.City.findByIdAndUpdate(req.params.id,
            {
                city_name: req.body.city_name
              
            },
            (err, city) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.City.findByIdAndRemove(req.params.id, (err, city) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}