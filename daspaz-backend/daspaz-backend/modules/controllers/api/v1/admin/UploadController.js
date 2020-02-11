const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class UplodController extends Controller {

    uploadImage(req, res) {
// console.log(req.file);
        if (req.file) {
            // console.log(req.file);
            res.json({
                message : 'تصویر با موفقیت آپلود شد',
                imagePath : `${config.host}${config.port}/` + req.file.path.replace(/\\/g , '/'),
                data :req.file,
                success : true,
            })
        } else {
            res.json({
                message: 'فایل شما آپلود نشد',
                success: false
            })
        }
    }
}
