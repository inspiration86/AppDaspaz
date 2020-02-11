const Controller = require(`${config.path.controller}/Controller`);


const SelleruserTransform = require(`${config.path.transform}/v1/SelleruserTransform`);
const bcrypt = require('bcrypt');
const express = require('express');
module.exports = new class UplodController extends Controller {

    uploadImage(req, res) {
// console.log('req.file');
        if (req.file) {
            req.checkBody('firstname', '  نام فروشنده نمی تواند خالی بماند').notEmpty();
            req.checkBody('lastname', 'نام خانوادگی فروشنده نمی تواند خالی بماند').notEmpty();
            req.checkBody('nationalcode', 'کدملی فروشنده نمی تواند خالی بماند').notEmpty();
            req.checkBody('mobile', 'شماره موبایل فروشنده مقاله نمی تواند خالی بماند').notEmpty();
            req.checkBody('address', 'آدرس فروشنده نمی تواند خالی بماند').notEmpty();
            req.checkBody('phone', 'شماره تلفن فروشنده نمی تواند خالی بماند').notEmpty();
            req.checkBody('nationalcardurl', '  تصویر کارت ملی نمی تواند خالی بماند').notEmpty();
            req.checkBody('profileurl', 'تصویر پروفایل نمی تواند خالی بماند').notEmpty();
            req.checkBody('certificateurl', ' تصویر شناسنامه نمی تواند خالی بماند').notEmpty();
            req.checkBody('password', '  پسورد نمی تواند خالی بماند').notEmpty();
            req.checkBody('city_name', '  نام شهر نمی تواند خالی بماند').notEmpty();
            req.checkBody('province_name', ' نام استان نمی تواند خالی بماند').notEmpty();
            req.checkBody('country_name', '  نام کشور نمی تواند خالی بماند').notEmpty();

            if (this.showValidationErrors(req, res))
                return;

            this.model.SellerUser({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                nationalcode: req.body.nationalcode,
                mobile: req.body.mobile,
                address: req.body.address,
                phone: req.body.phone,
                nationalcardurl: req.body.nationalcardurl,
                profileurl: req.body.profileurl,
                certificateurl: req.body.certificateurl,
                password: req.body.password,
                city_name:req.body.city_name,
                country_name:req.body.country_name,
                province_name:req.body.province_name,


            }).save(err => {
                if (err) {
                    // if (err.code == 11000) {
                    //     return res.json({
                    //         data: 'موبایل  نمی تواند تکراری باشد',
                    //         success: false
                    //     })
                    // }
                    // else {
                    throw err;
                }
                // }

                return res.json({
                    data: 'کاربر با موفقیت عضو وبسایت شد',
                    success: true
                });
            })
        }
    }
}
