import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Left,
} from 'native-base';
export default class Rules extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Text style={{ fontSize: 17, marginTop: '8%', marginLeft: '2%', fontFamily: 'Octicons' }}> *راهنما و قوانین اپلیکیشن:</Text>
                    </View>
                    <View>
                        <Card>
                            <CardItem>
                               <Text style={{fontFamily: 'Octicons', fontSize: 18,color: 'gray',flex:1,justifyContent:'space-between'}}>
                                    { ' '}
                                    __ استفاده از خدمات این اپلیکیشن بدان معنی است که شرایط استفاده از آن را پذیرفته اید و باتوجه به اینکه تمامی خدمات ارائه شده در مجموعه "دست پز"تابع قوانین مطروح در این بخش است.مطالعه آن پیش از ثبت نام و استفاده از خدمات الزامی است.{'\n'}{'\n'}
                                    1- در کلیه مراحل استفاده از اپلیکیشن "دست پز"خریدار و فروشنده موظف به رعایت قوانین جمهوری اسلامی ایران هستندخدمات ارائه شده در مجموعه "دست پز"تابع قوانین مطروح در این بخش است.{'\n'}{'\n'}
                                    2- "دست پز" یک رستوران یا فروشگاه نیست.محصولاتی که در این نرم افزار عرضه میشود توسط افراد خانه دار در هتل و در سطح شهر تهران تهیه و طبخ میشود.{'\n'}{'\n'}
                                    3-"دست پز"مستقیما هیچگونه سرویسی ارائه نمی نمایدبلکه ایجاد کننده پل ارتباطی بین خریدار و فروشنده جهت تسهیل در ارائه خدمات است این بدان معنی است که فروشنده مختار در قبول یا رد سفارشات خریدار است.
                                    {'\n'}{'\n'}4-"دست پز"در تمامی ساعات شبانه روز در تمامی شهر تهران سرویس دهی میکند پس از تکمیل فرایند خرید و پخت, تحویل محصول مد نظر از طریق پیک انجام میشود.ارسال وتحویل به صورت خودکار پس از  تایید فروشنده مبنی بر" آماده  تحویل بودن محصول"
                                    انجام میشود .{'\n'}{'\n'}
                                    5- خریدارپس از ثبت سفارش می بایست منتظر تایید از سوی فروشنده باشد تاپس از تایید ازسوی فروشنده,خریدارمبلغ موردنظر را واریزنماید تاپیامی حاوی تاییدتکمیل فرایند خریدوشروع پخت وپز به کاربر ارسال شود. بدیهی است که عدم تاییداز سوی فروشنده با عدم واریز وجه از سوی خریدار به منزله عدم ثبت سفارش, عدم شروع فرایند پخت و پز است.{'\n'}{'\n'}
                                    6-خریدار تاریخ مد نظرتحویل محصول خود را به صورت اختیاری وارد میکند لذا پس از ثبت سفارش و اماده سازی می بایست در تاریخ تعیین شده در محل جهت دریافت محصول حضور داشته باشد.درغیر اینصورت "دست پز"هیچ مسئولیتی را برعهده ندارد وحضور فیزیکی جهت دریافت محصول در آدرس مد نظر تمامابرعهده خریداراست.{'\n'}{'\n'}
                                    7-خریدارموظف است در زمان تحویل محصول,تعداد و نوع محصول را کنترل نماید و در صورت هرگونه مغایرت در حضور تحویل دهنده با "دست پز "تماس بگیرد.{'\n'}{'\n'}
                                    8-کاربر می پذیردکه توافقات حاضر یک توافق قابل رجوع از سوی شرکت است و شرکت می تواند هر زمان تنها به صلاحدید خود و بدون دلیل یک حساب کاربری را مسدود کند ومانع استفاده کاربر از خدمات "دست پز" گردد.{'\n'}{'\n'}
                                    9-استفاده از"دست پز"
                                    منوط به داشتن حساب کاربری است هر شخصی (اعم از حقیقی و حقوقی)تنها مجاز  به افتتاح یک حساب کاربری است.درخصوص اشخاص حقوقی فرد افتتاح کننده حساب کاربری,باید نماینده قانونی آن شخص حقوقی باشد.{'\n'}{'\n'}
                                    10-کاربر می پذیرد اطلاعات درخواست شده توسط"دست پز"
                                    را به طور صحیح و دقیق ارائه نماید در صورت نیاز به تغییر اطلاعات در اسرع وقت نسبت به به روز رسانی آنها اقدام  نماید.مسئولیت عدم تطابق اطلاعات مندرج با واقع وکلیه  عواقب ناشی از آن بر عهده  کاربر است.{'\n'}{'\n'}
                                    11-هر کاربر با ثبت نام در"دست پز"
                                    و ایجاد حساب کاربری به نام خودصحت__ __ __ صادره از حساب کاربری خویش را پذیرفته و درنتیجه حق هرگونه اعتراض یا ادعای آنی(مبنی برانکار
                                    ,تردید یا جعل__ پیام های ارسالی)را از خویش سلب,اسقاط می نماید.{'\n'}{'\n'}
                                    12-مسئولیت تمامی فعالیت هایی که از طریق حساب کاربری انجام میشود مطلقا به عهده صاحب حساب کاربری است در نتیجه کاربر مجاز نیست حساب کاربری خود را در اختیارشخص دیگری قرار دهد یا آن را به هر نحو به دیگری منتقل نماید.به علاوه ضروری است که کاربر در راستای ممانعت از سوء استفاده غیر,در حفظ اطلاعات حساب کاربری خود,حداکثر اقدامات لازم را مبذول دارد.این نکته حائز اهمیت است که در صورت ظن به دسترسی اشخاص ثالث به حساب کاربری,کاربر موظف است برای انجام پیگیری های بیشتر شرکت را مطلع سازدو همچنین شرکت هیچ گونه مسئولیتی در خصوص عملکرد اشخاص ثالث که ممکن است موجب__ نقص یا اشکال یاایرادی در حساب کاربری کاربر گردد نخواهد داشت.{'\n'}{'\n'}
                                    13-"دست پز" با پیگیری های مداوم و نظارت کامل برنظرات خریدارن به محصولات ارائه شده سعی در فراهم ساختن بستری شفاف و کارا در بهبود کیفیت دارد.باتوجه به  نسبی بودن مفهوم کیفیت"دست پز" هیچ گونه مسئولیت اعم از مدنی وکیفری درقبال نوع و میزان کیفیت سرویس ارائه شده وقایع,مشکلات احتمالی آن در مقابل کاربران و اشخاص ثالث نخواهد داشت.{'\n'}{'\n'}
                                    14-خدمات"دست پز" شامل______________,پیشنهاد فروشنده___ایجادامکان مقایسه قیمت های پیشنهادی خواهد بود.{'\n'}{'\n'}
                                    15-"دست پز" درجهت بهبود خدمات ,رضایت مشتری ممکن است اقدام به
                                    تغیرات ظاهری وفنی اپلیکیشن کندلذا ادامه استفاده کاربر ازخدمات"دست پز"
                                    به معنای پذیرش این تغییرات خواهد بود.{'\n'}{'\n'}
                                    16-کلیه حقوق معنوی نرم افزار "دست پز"____وابسته به آن و هرآنچه بدان  ملحق می گردد مانند:نام,علامت تجاری خدمات ارائه شد, تحت این نام وسایر موارد از جدار مالکیت فکری و معنوی آن متعلق به شرکت"نام شرکت"
                                    بوده و هرگونه سوئ استفاده از هریک از موارد فوق قابلیت پیگیری قانونی خواهد داشت.{'\n'}{'\n'}
                                    17-افراد(حقیقی و حقوقی)نمی توانند نرم افزار"دست پز" راتغییردهندویاآن رابازتولید,مشابه سازی و یابازنویسی کنند. یااز جزء یا کل آن برای تولید یک برنامه مشابه یا غیرمشابه استفاده نمایند.{'\n'}{'\n'}
                                    18-اقدام کاربر برای دسترسی به هریک از سرویس هاوبرنامه های شبکه های مرتبط با سرورهاوهمچنین استفاده از مهندسی معکوس___________________________یاتلاش در راستای آن غیرمجاز بوده وتخلف محسوب می گرددو"دست پز"
                                    مجاز به پیگیری های قانونی است.{'\n'}{'\n'}
                                    19-پس از ثبت سفارش ازسوی خریدارو واریز وجه چنانچه به دلیل تصمیم فروشنده,ادمین درتاریخ وساعت مورد نظروآدرس معنی تحویل داده نشود"دست پز"
                                    موظف است مبلغ پرداختی خریدار را به حساب وی مرجوع کند.


                                </Text>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        );
    }
}

