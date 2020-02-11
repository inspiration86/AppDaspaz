const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class SliderController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.Slider.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' }  })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new SliderTransform().withPaginate().transformCollection(result),
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
        this.model.Slider.find({}).sort({ title: -1 }).exec((err, slider) => {
            if (err) throw err;
            if (slider) {
                return res.json({
                    data: slider,
                    success: true
                });
            }
            res.json({
                data: 'چنین اسلایدری وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Slider.findById(req.params.id, (err, slider) => {
            if (slider) {
                return res.json({
                    data: slider,
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
        req.checkBody('title', ' عنوان اسلایدر نمیتواند خالی بماند').notEmpty();
        req.checkBody('caption', ' کپشن اسلایدر نمیتواند خالی بماند').notEmpty();
        req.checkBody('imageurl', ' تصویر نمیتواند خالی بماند').notEmpty();
        

        this.escapeAndTrim(req, 'name');
        if (this.showValidationErrors(req, res))
            return;
        let newSlider = new this.model.Slider({
            title: req.body.title,
            caption: req.body.caption,
            imageurl: req.body.imageurl
        })
        newSlider.save(err => {
            if (err) throw err;
            res.json('اسلایدر با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Slider.findByIdAndUpdate(req.params.id,
            {
                title: req.body.title,
                caption: req.body.caption,
                imageurl: req.body.imageurl
              
            },
            (err, slider) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.Slider.findByIdAndRemove(req.params.id, (err, slider) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}