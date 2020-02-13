import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    TextInput,

} from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
    {
        name: '1.\tدر کلیه مراحل استفاده از اپلیکیشن "دس پز" خریدار و فروشنده موظف به رعایت قوانین جمهوری اسلامی ایران هستند.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: '2.دس پز" یک رستوران یا فروشگاه نیست. محصولاتی که در این اپلیکیشن عرضه می¬شود توسط افراد خانه دار در منزل و در سطح شهر تهران تهیه و طبخ می¬شود.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '3.دس پز" یک رستوران یا فروشگاه نیست. محصولاتی که در این اپلیکیشن عرضه می¬شود توسط افراد خانه دار در منزل و در سطح شهر تهران تهیه و طبخ می¬شود.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '4.\t"دس پز" در تمامی ساعات شبانه روز در تمامی شهر تهران سرویس دهی می¬کند. پس از تکمیل فرآیند خرید و پخت، تحویل محصول مورد نظر از طریق پیک انجام می¬شود.ارسال و تحویل به صورت خودکار پس از  تایید فروشنده مبنی بر"آماده  تحویل بودن محصول" انجام می¬شود.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '5.\tخریدارپس از ثبت سفارش می¬بایست منتظر تایید از سوی فروشنده باشد تاپس از تایید ازسوی فروشنده، خریدارمبلغ موردنظر را واریزنماید تاپیامی حاوی تاییدیه تکمیل فرآیند خرید و شروع پخت وپز به کاربر ارسال شود. بدیهی است که عدم تایید از سوی فروشنده یا عدم واریز وجه از سوی خریدار به منزله عدم ثبت سفارش و عدم شروع فرآیند پخت و پز است.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '6.\tفروشنده پس از اعلام اتمام فرآیند آماده¬سازی و آماده تحویل می¬بایست در آدرس ثبت شده در حساب کاربری حضور داشته باشد تا محصول مورد نظر را به پیک مربوطه تحویل دهد.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '7.\tفروشنده موظف است دقیقا محصول مورد نظر خریدار را که به عنولن سفارس وی ثبت شده (از نظر حجم، تاریخ و نوع محصول) را آماده کند و تحویل دهد.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '8.\tکاربر می پذیرد که توافقات حاضر یک توافق قابل رجوع از سوی دس پز است و دس پز می تواند هر زمان تنها به صلاحدید خود و بدون دلیل، یک حساب کاربری را مسدود کند و مانع استفاده کاربر از خدمات "دس پز" گردد.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '9.\tاستفاده از"دس پز" منوط به داشتن حساب کاربری است. هر شخص (اعم از حقیقی و حقوقی) تنها مجاز به افتتاح یک حساب کاربری است. درخصوص اشخاص حقوقی، فرد افتتاح کننده حساب کاربری، باید نماینده قانونی آن شخص حقوقی باشد.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '10.\tکاربر می¬پذیرد اطلاعات درخواست شده توسط "دست پز" را به طور صحیح و دقیق ارائه نماید و در صورت نیاز به تغییر اطلاعات در اسرع وقت نسبت به بروزرسانی آن¬ها اقدام نماید. مسئولیت عدم تطابق اطلاعات مندرج با واقع وکلیه  عواقب ناشی از آن بر عهده خود کاربر است.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '11.\tهر کاربر با ثبت نام در "دس پز" و ایجاد حساب کاربری به نام خود صحت انتساب تمام داده پیام¬های صادره از حساب کاربری خویش را پذیرفته و درنتیجه حق هرگونه اعتراض یا ادعای آتی (مبنی برانکار، تردید یا جعل داده پیام¬های ارسالی) را از خویش سلب و اسقاط می¬نماید',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '12.\tمسئولیت تمامی فعالیت¬هایی که از طریق حساب کاربری انجام می¬شود مطلقا به عهده صاحب حساب کاربری است در نتیجه کاربر مجاز نیست حساب کاربری خود را برای استفاده در اختیارشخص دیگری قرار دهد یا آن را به هر نحو به دیگری منتقل نماید. به علاوه ضروری است که کاربر در راستای ممانعت از سوء استفاده غیر، در حفظ اطلاعات حساب کاربری خود، حداکثر اقدامات لازم را مبذول دارد. این نکته حائز اهمیت است که در صورت ظن به دسترسی اشخاص ثالث به حساب کاربری,، کاربر موظف است برای انجام پیگیری¬های بیشتر دس پز را مطلع سازد. همچنین دس پز هیچ گونه مسئولیتی در خصوص عملکرد اشخاص ثالث که ممکن است موجب حدوث نقص یا اشکال یا ایرادی در حساب کاربری کاربر گردد نخواهد داشت.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '13.\t"دس پز" با پیگیری¬های مداوم و نظارت کامل برنظرات خریدارن به محصولات ارائه شده سعی در فراهم ساختن بستری شفاف و کارا در بهبود کیفیت دارد. باتوجه به  نسبی بودن مفهوم کیفیت "دس پز" هیچ گونه مسئولیت اعم از مدنی وکیفری درقبال نوع و میزان کیفیت سرویس ارائه شده و وقایع و مشکلات احتمالی آن در مقابل کاربران و اشخاص ثالث نخواهد داشت.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '14.\tخدمات "دس پز" شامل ارائه سهولت سفارش¬گذاری، پیشنهاد فروشنده خوش نام، ایجاد امکان مقایسه قیمت¬های پیشنهادی خواهد بود.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '15.\t"دس پز" درجهت بهبود خدمات، رضایت مشتری ممکن است اقدام به تغییرات ظاهری وفنی اپلیکیشن کند. لذا ادامه استفاده کاربر ازخدمات "دس پز" به معنای پذیرش این تغییرات خواهد بود.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '16.\tکلیه حقوق معنوی نرم افزار "دس پز"، موارد وابسته به آن و هرآنچه بدان  ملحق می¬گردد مانند نام، علامت تجاری، خدمات ارائه شده تحت این نام وسایر موارد از جمله مالکیت فکری و معنوی آن متعلق به شرکت سازنده دس پزبوده و هرگونه سوء استفاده از هریک از موارد فوق قابلیت پیگیری قانونی خواهد داشت.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '17.\tافراد (حقیقی و حقوقی) نمی¬توانند اپلیکیشن "دس پز" را تغییردهند و یا آن را بازتولید، مشابه سازی یا بازنویسی کنند. یااز جزء یا کل آن برای تولید یک برنامه مشابه یا غیرمشابه استفاده نمایند.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '18.\tاقدام کاربر برای دسترسی به هریک از سرویس ها و برنامه¬های شبکه¬های مرتبط با سرورها، همچنین استفاده از مهندسی معکوس یا مترجم وارون برای دسترسی به کد سطح بالا یا زبان ماشین یا تلاش در راستای آن غیرمجاز بوده وتخلف محسوب می¬گردد و"دس پز" مجاز به پیگیری¬های قانونی است.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '19.\tپس از ثبت سفارش ازسوی خریدارو واریز وجه، چنانچه به دلیل قصور فروشنده و یا ادمین محصول درتاریخ وساعت مورد نظر و آدرس معینه تحویل داده نشود "دس پز" موظف است مبلغ پرداختی خریدار را به حساب وی مرجوع کند.',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },


]

export default class ContactsView extends Component {


    render() {
        return (
            <View style={{fontFamily: 'IRANSansMobile(FaNum)',backgroundColor:'#fff'}}>

                <ScrollView>
                    <View style={{
                       backgroundColor:'#777777'
                    }}>
                    <Text style={{
                        fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15,color:'#fff',backgroundColor:'#777777',marginHorizontal:10
                    }}>استفاده از خدمات این اپلیکیشن بدان معنی است که شرایط استفاده از آن را پذیرفته¬اید. باتوجه به اینکه تمامی خدمات ارائه شده در مجموعه "دست پز" تابع قوانین مطروح در این بخش است. مطالعه آن پیش از ثبت نام و استفاده از خدمات الزامی است.</Text>
                    </View>
                    {
                    list.map((l, i) => (
                        <ListItem titleStyle={{fontFamily: 'IRANSansMobile(FaNum)',textAlign: 'right',}}
                            key={i}
                            title={l.name}
                            bottomDivider
                        />
                    ))
                }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    formContent:{
        flexDirection: 'row',
        marginTop:30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:10,
    },
    icon:{
        width:30,
        height:30,
    },
    iconBtnSearch:{
        alignSelf:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    notificationList:{
        marginTop:20,
        padding:10,
    },
    notificationBox: {
        paddingTop:10,
        paddingBottom:10,
        marginTop:5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius:10,
    },
    image:{
        width:45,
        height:45,
        borderRadius:20,
        marginLeft:20
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft:10,
        alignSelf: 'center'
    },
});
