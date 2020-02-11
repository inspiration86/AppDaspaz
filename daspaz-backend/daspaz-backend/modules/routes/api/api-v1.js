const express = require('express');
const router = express.Router();
const customerRouter = express.Router();
const sellerRouter = express.Router();
const adminRouter = express.Router();

// middlewares
const apiAuthAdminUser = require('./middleware/apiAuthAdminUser');
const apiAuthcustomer = require('./middleware/apiAuthcustomer');
const apiAuthseller = require('./middleware/apiAuthseller');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');


//customer Controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const CustomerAuthCustomerController = require(`${ControllerApi}/v1/customer/AuthCustomerController`);
const CustomerCustomeruserController = require(`${ControllerApi}/v1/customer/CustomeruserController`);
const CustomerCommentController = require(`${ControllerApi}/v1/customer/CommentController`);
const CustomerAnswerController = require(`${ControllerApi}/v1/customer/AnswerController`);
const CustomerSelleruserController = require(`${ControllerApi}/v1/customer/SelleruserController`);
const CustomerUploadController = require(`${ControllerApi}/v1/customer/UploadController`);
const CustomerAbilitysellerController = require(`${ControllerApi}/v1/customer/AbilitysellerController`);
const CustomerCartcustomController = require(`${ControllerApi}/v1/customer/CartcustomController`);
const CustomerProductcategoryController = require(`${ControllerApi}/v1/customer/ProductcategoryController`);
const CustomerProductsellernewController = require(`${ControllerApi}/v1/customer/ProductsellernewController`);
const CustomerCityController = require(`${ControllerApi}/v1/customer/CityController`);
const CustomerCountryController = require(`${ControllerApi}/v1/customer/CountryController`);
const CustomerProvinceController = require(`${ControllerApi}/v1/customer/ProvinceController`);

//seller Controller
const SellerCustomeruserController = require(`${ControllerApi}/v1/seller/CustomeruserController`);
const SellerCommentController = require(`${ControllerApi}/v1/seller/CommentController`);
const SellerAnswerController = require(`${ControllerApi}/v1/seller/AnswerController`);
const SellerSelleruserController = require(`${ControllerApi}/v1/seller/SelleruserController`);
const SellerUploadController = require(`${ControllerApi}/v1/seller/UploadController`);
const SellerAbilitysellerController = require(`${ControllerApi}/v1/seller/AbilitysellerController`);
const SellerCartcustomController = require(`${ControllerApi}/v1/seller/CartcustomController`);
const SellerProductcategoryController = require(`${ControllerApi}/v1/seller/ProductcategoryController`);
const SellerProductsellernewController = require(`${ControllerApi}/v1/seller/ProductsellernewController`);
const SellerAuthSellerController = require(`${ControllerApi}/v1/seller/AuthSellerController`);
const SellerCityController = require(`${ControllerApi}/v1/seller/CityController`);
const SellerCountryController = require(`${ControllerApi}/v1/seller/CountryController`);
const SellerProvinceController = require(`${ControllerApi}/v1/seller/ProvinceController`);

//admin controller
const AdminProductcategoryController = require(`${ControllerApi}/v1/admin/ProductcategoryController`);
const AdminUploadController = require(`${ControllerApi}/v1/admin/UploadController1`);
const AdminCityController = require(`${ControllerApi}/v1/admin/CityController`);
const AdminCountryController = require(`${ControllerApi}/v1/admin/CountryController`);
const AdminProvinceController = require(`${ControllerApi}/v1/admin/ProvinceController`);
const AdminProductsellernewController = require(`${ControllerApi}/v1/admin/ProductsellernewController`);
const AdminSliderController = require(`${ControllerApi}/v1/admin/SliderController`);
const AdminAuthUserController = require(`${ControllerApi}/v1/admin/AuthUserController`);
const AdminAddAdminController = require(`${ControllerApi}/v1/admin/AddAdminController`);
const AdminUserController = require(`${ControllerApi}/v1/admin/UserController`);
const AdminAbilitysellerController = require(`${ControllerApi}/v1/admin/AbilitysellerController`);
const AdminSelleruserController = require(`${ControllerApi}/v1/admin/SelleruserController`);
const AdminCustomeruserController = require(`${ControllerApi}/v1/admin/CustomeruserController`);
const AdminAnswerController = require(`${ControllerApi}/v1/admin/AnswerController`);
const AdminCommentController = require(`${ControllerApi}/v1/admin/CommentController`);
const AdminCartcustomController = require(`${ControllerApi}/v1/admin/CartcustomController`);


//admin router

//productcategory
adminRouter.get('/productcategory', AdminProductcategoryController.index.bind(AdminProductcategoryController));
adminRouter.get('/productcategory/:id', AdminProductcategoryController.single.bind(AdminProductcategoryController));
adminRouter.post('/productcategory', AdminProductcategoryController.store.bind(AdminProductcategoryController));
adminRouter.put('/productcategory/:id', AdminProductcategoryController.update.bind(AdminProductcategoryController));
adminRouter.delete('/productcategory/:id', AdminProductcategoryController.destroy.bind(AdminProductcategoryController));

//City
adminRouter.get('/City', apiAuthAdminUser,AdminCityController.index.bind(AdminCityController));
adminRouter.get('/City/:id', AdminCityController.single.bind(AdminCityController));
adminRouter.post('/City', AdminCityController.store.bind(AdminCityController));
adminRouter.put('/City/:id', AdminCityController.update.bind(AdminCityController));
adminRouter.delete('/City/:id', AdminCityController.destroy.bind(AdminCityController));


//country
adminRouter.get('/country', AdminCountryController.index.bind(AdminCountryController));
adminRouter.get('/country/:id', AdminCountryController.single.bind(AdminCountryController));
adminRouter.post('/country', AdminCountryController.store.bind(AdminCountryController));
adminRouter.put('/country/:id', AdminCountryController.update.bind(AdminCountryController));
adminRouter.delete('/country/:id', AdminCountryController.destroy.bind(AdminCountryController));

//province
adminRouter.get('/province', AdminProvinceController.index.bind(AdminProvinceController));
adminRouter.get('/province/:id', AdminProvinceController.single.bind(AdminProvinceController));
adminRouter.post('/province', AdminProvinceController.store.bind(AdminProvinceController));
adminRouter.put('/province/:id', AdminProvinceController.update.bind(AdminProvinceController));
adminRouter.delete('/province/:id', AdminProvinceController.destroy.bind(AdminProvinceController));

//productsellernew
adminRouter.get('/productsellernew', apiAuthAdminUser,AdminProductsellernewController.index.bind(AdminProductsellernewController));
adminRouter.get('/productsellernew/:id', AdminProductsellernewController.single.bind(AdminProductsellernewController));
adminRouter.delete('/productsellernew/:id', AdminProductsellernewController.destroy.bind(AdminProductsellernewController));

//slider
adminRouter.get('/slider', AdminSliderController.index.bind(AdminSliderController));
adminRouter.get('/slider/:id', AdminSliderController.single.bind(AdminSliderController));
adminRouter.post('/slider', AdminSliderController.store.bind(AdminSliderController));
adminRouter.put('/slider/:id', AdminSliderController.update.bind(AdminSliderController));
adminRouter.delete('/slider/:id', AdminSliderController.destroy.bind(AdminSliderController));

//addadmin
adminRouter.post('/addadmin' , AdminAddAdminController.store.bind(AdminAddAdminController));
adminRouter.put('/addadmin/:id' , AdminAddAdminController.update.bind(AdminAddAdminController));

//user
adminRouter.get('/user',AdminUserController.index.bind(AdminUserController));
adminRouter.get('/user/:id', AdminUserController.single.bind(AdminUserController));
adminRouter.post('/user', AdminUserController.store.bind(AdminUserController));
adminRouter.put('/user/:id', AdminUserController.update.bind(AdminUserController));
adminRouter.delete('/user/:id', AdminUserController.destroy.bind(AdminUserController));

//abilityseller
adminRouter.get('/abilityseller', apiAuthAdminUser,AdminAbilitysellerController.index.bind(AdminAbilitysellerController));
adminRouter.get('/abilityseller/:id', AdminAbilitysellerController.single.bind(AdminAbilitysellerController));
adminRouter.delete('/abilityseller/:id', AdminAbilitysellerController.destroy.bind(AdminAbilitysellerController));

//selleruser
adminRouter.get('/selleruser', apiAuthAdminUser,AdminSelleruserController.index.bind(AdminSelleruserController));
adminRouter.get('/selleruser/:id', AdminSelleruserController.single.bind(AdminSelleruserController));
adminRouter.delete('/selleruser/:id', AdminSelleruserController.destroy.bind(AdminSelleruserController));

//customeruser
adminRouter.get('/customeruser', apiAuthAdminUser,AdminCustomeruserController.index.bind(AdminCustomeruserController));
adminRouter.get('/customeruser/:id', AdminCustomeruserController.single.bind(AdminCustomeruserController));

//answer
adminRouter.get('/answer', apiAuthAdminUser,AdminAnswerController.index.bind(AdminAnswerController));
adminRouter.get('/answer/:id', AdminAnswerController.single.bind(AdminAnswerController));

//comment
adminRouter.get('/comment', apiAuthAdminUser,AdminCommentController.index.bind(AdminCommentController));
adminRouter.get('/comment/:id', AdminCommentController.single.bind(AdminCommentController));

//cartcustom
adminRouter.get('/cartcustom', apiAuthAdminUser,AdminCartcustomController.index.bind(AdminCartcustomController));
adminRouter.get('/cartcustom/:id', AdminCartcustomController.single.bind(AdminCartcustomController));


adminRouter.post('/login', AdminAuthUserController.login.bind(AdminAuthUserController));
adminRouter.post('/register', AdminAuthUserController.register.bind(AdminAuthUserController));

//router.get('/' , HomeController.index);
router.get('/version', HomeController.version);

sellerRouter.post('/login', SellerAuthSellerController.login.bind(SellerAuthSellerController));
sellerRouter.post('/register',uploadImage.single('image'), SellerAuthSellerController.register.bind([SellerAuthSellerController]));

//customer router
customerRouter.post('/login', CustomerAuthCustomerController.login.bind(CustomerAuthCustomerController));
customerRouter.post('/register', CustomerAuthCustomerController.register.bind(CustomerAuthCustomerController));
customerRouter.get('/customeruser',apiAuthcustomer, CustomerCustomeruserController.index.bind(CustomerCustomeruserController));
customerRouter.get('/customeruser/:id', CustomerCustomeruserController.single.bind(CustomerCustomeruserController));
customerRouter.get('/comment', CustomerCommentController.index.bind(CustomerCommentController));
customerRouter.get('/comment/:id', CustomerCommentController.single.bind(CustomerCommentController));
customerRouter.get('/answer', CustomerAnswerController.index.bind(CustomerAnswerController));
customerRouter.get('/answer/:id', CustomerAnswerController.single.bind(CustomerAnswerController));
customerRouter.get('/selleruser', CustomerSelleruserController.index.bind(CustomerSelleruserController));
customerRouter.get('/selleruser/:id', CustomerSelleruserController.single.bind(CustomerSelleruserController));
customerRouter.get('/abilityseller', CustomerAbilitysellerController.index.bind(CustomerAbilitysellerController));
customerRouter.get('/abilityseller/:id', CustomerAbilitysellerController.single.bind(CustomerAbilitysellerController));
customerRouter.get('/cartcustom', CustomerCartcustomController.index.bind(CustomerCartcustomController));
customerRouter.get('/cartcustom/:id', CustomerCartcustomController.single.bind(CustomerCartcustomController));
customerRouter.get('/productcategory',apiAuthcustomer,CustomerProductcategoryController.index.bind(CustomerProductcategoryController));
customerRouter.get('/productcategory/:id', CustomerProductcategoryController.single.bind(CustomerProductcategoryController));
customerRouter.get('/productsellernew', CustomerProductsellernewController.index.bind(CustomerProductsellernewController));
customerRouter.get('/productsellernew/:id', CustomerProductsellernewController.single.bind(CustomerProductsellernewController));
customerRouter.get('/city', CustomerCityController.index.bind(CustomerCityController));
customerRouter.get('/city/:id', CustomerCityController.single.bind(CustomerCityController));
customerRouter.get('/country',apiAuthcustomer,CustomerCountryController.index.bind(CustomerCountryController));
customerRouter.get('/country/:id', CustomerCountryController.single.bind(CustomerCountryController));
customerRouter.get('/province', CustomerProvinceController.index.bind(CustomerProvinceController));
customerRouter.get('/province/:id', CustomerProvinceController.single.bind(CustomerProvinceController));


//seller router


//customeruser
sellerRouter.get('/customeruser', SellerCustomeruserController.index.bind(SellerCustomeruserController));
sellerRouter.get('/customeruser/:id', SellerCustomeruserController.single.bind(SellerCustomeruserController));
//sellerRouter.post('/customeruser', SellerCustomeruserController.store.bind(SellerCustomeruserController));
sellerRouter.put('/customeruser/:id', SellerCustomeruserController.update.bind(SellerCustomeruserController));
sellerRouter.delete('/customeruser/:id', SellerCustomeruserController.destroy.bind(SellerCustomeruserController));


//comment
sellerRouter.get('/comment', SellerCommentController.index.bind(SellerCommentController));
sellerRouter.get('/comment/:id', SellerCommentController.single.bind(SellerCommentController));
sellerRouter.put('/comment/:id', SellerCommentController.update.bind(SellerCommentController));
sellerRouter.delete('/comment/:id', SellerCommentController.destroy.bind(SellerCommentController));


//answer
sellerRouter.get('/answer', SellerAnswerController.index.bind(SellerAnswerController));
sellerRouter.get('/answer/:id', SellerAnswerController.single.bind(SellerAnswerController));
sellerRouter.post('/answer', SellerAnswerController.store.bind(SellerAnswerController));
sellerRouter.put('/answer/:id', SellerAnswerController.update.bind(SellerAnswerController));
sellerRouter.delete('/answer/:id', SellerAnswerController.destroy.bind(SellerAnswerController));


//selleruser
sellerRouter.get('/selleruser', SellerSelleruserController.index.bind(SellerSelleruserController));
sellerRouter.get('/selleruser/:id', SellerSelleruserController.single.bind(SellerSelleruserController));
//sellerRouter.post('/selleruser', SellerSelleruserController.store.bind(SellerSelleruserController));
sellerRouter.put('/selleruser/:id', SellerSelleruserController.update.bind(SellerSelleruserController));
sellerRouter.delete('/selleruser/:id', SellerSelleruserController.destroy.bind(SellerSelleruserController));


//abilityseller
sellerRouter.get('/abilityseller', SellerAbilitysellerController.index.bind(SellerAbilitysellerController));
sellerRouter.get('/abilityseller/:id', SellerAbilitysellerController.single.bind(SellerAbilitysellerController));
sellerRouter.post('/abilityseller', SellerAbilitysellerController.store.bind(SellerAbilitysellerController));
sellerRouter.put('/abilityseller/:id', SellerAbilitysellerController.update.bind(SellerAbilitysellerController));
sellerRouter.delete('/abilityseller/:id', SellerAbilitysellerController.destroy.bind(SellerAbilitysellerController));


//productsellernew
sellerRouter.get('/productsellernew', SellerProductsellernewController.index.bind(SellerProductsellernewController));
sellerRouter.get('/productsellernew/:id', SellerProductsellernewController.single.bind(SellerProductsellernewController));
sellerRouter.post('/productsellernew', SellerProductsellernewController.store.bind(SellerProductsellernewController));
sellerRouter.put('/productsellernew/:id', SellerProductsellernewController.update.bind(SellerProductsellernewController));
sellerRouter.delete('/productsellernew/:id', SellerProductsellernewController.destroy.bind(SellerProductsellernewController));


//productcategory
sellerRouter.get('/productcategory', SellerProductcategoryController.index.bind(SellerProductcategoryController));
sellerRouter.get('/productcategory/:id', SellerProductcategoryController.single.bind(SellerProductcategoryController));
// sellerRouter.post('/productcategory', SellerProductcategoryController.store.bind(SellerProductcategoryController));
// sellerRouter.put('/productcategory/:id', SellerProductcategoryController.update.bind(SellerProductcategoryController));
// sellerRouter.delete('/productcategory/:id', SellerProductcategoryController.destroy.bind(SellerProductcategoryController));


//cartcustom
sellerRouter.get('/cartcustom', SellerCartcustomController.index.bind(SellerCartcustomController));
sellerRouter.get('/cartcustom/:id', SellerCartcustomController.single.bind(SellerCartcustomController));
//sellerRouter.post('/cartcustom', SellerCartcustomController.store.bind(SellerCartcustomController));
sellerRouter.put('/cartcustom/:id', SellerCartcustomController.update.bind(SellerCartcustomController));
sellerRouter.delete('/cartcustom/:id', SellerCartcustomController.destroy.bind(SellerCartcustomController));


//city
sellerRouter.get('/city', SellerCityController.index.bind(SellerCityController));
sellerRouter.get('/city/:id', SellerCityController.single.bind(SellerCityController));


//country
sellerRouter.get('/country', SellerCountryController.index.bind(SellerCountryController));
sellerRouter.get('/country/:id', SellerCountryController.single.bind(SellerCountryController));


//province
sellerRouter.get('/province', SellerProvinceController.index.bind(SellerProvinceController));
sellerRouter.get('/province/:id', SellerProvinceController.single.bind(SellerProvinceController));




//uplodimagecustomer
customerRouter.post('/image', uploadImage.single('image'), CustomerUploadController.uploadImage.bind(CustomerUploadController));

//uplodimageseller
sellerRouter.post('/image', uploadImage.single('image'), SellerUploadController.uploadImage.bind(SellerUploadController));

//uplodimageadmin
adminRouter.post('/image', uploadImage.single('image'), AdminUploadController.uploadImage.bind(AdminUploadController));



router.use('/seller', [sellerRouter , apiAuthseller])
router.use('/customer', [customerRouter, apiAuthcustomer])
router.use('/admin', [adminRouter , apiAuthAdminUser]);

module.exports = router;
