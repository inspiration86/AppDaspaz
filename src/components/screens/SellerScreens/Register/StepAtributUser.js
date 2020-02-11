import React, {Component} from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    PixelRatio
} from "react-native";
import {connect} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
    firstNameChanged,
    lastNameChanged,
    nationalCodeChanged,
    phoneChanged,
    certificateURLChanged,
    profileURLChanged,
    addressChanged,
    emailChanged,
    nationalCardURLChanged,
    mobileChanged,
    passwordChanged,
    registerSeller,
} from "../../../../action/Seller/RegisterSellerAction";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Button} from "native-base";

class StepAtributUser extends Component {
    constructor(props){
        super(props);
        this.state={
            message:'اطلاعات را به طور کامل وارد نمائید',
            showAlert: false,
        }
        // validateNationalCode('4189900125');
    }
    onFirstNameChange(text) {
        this.props.firstNameChanged(text)
    }

    onLastnameChange(text) {
        this.props.lastNameChanged(text)
    }

    onNationalCodeChanged(text) {
        this.props.nationalCodeChanged(text)
    }

    onPhoneChanged(text) {
        this.props.phoneChanged(text)
    }

    onEmailChanged(text) {
        this.props.emailChanged(text)
    }

    onMobileChange(text) {
        this.props.mobileChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    // onLoginUser() {
    //     const {mobile, password} = this.props;
    //     this.props.loginUser({mobile, password})
    // }

    // renderButton() {
    //     if (this.props.loading) {
    //         return (<ActivityIndicator/>)
    //     }
    //     return (<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
    //                                 onPress={this.onLoginUser.bind(this)}>
    //         <Text style={styles.loginText}>ورود</Text>
    //     </TouchableHighlight>)
    // }
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    onValidationForm(){
   if(vmsNationalCode(this.props.nationalCode)===false){
       this.setState({message:'شماره ملی نامعتبر است '})
       this.showAlert();
   }else
        if(this.props.firstName ===''){
            this.setState({message:'نام را وارد نماید'})
            this.showAlert();
        }
        else
        if(this.props.lastName ===''){
            this.setState({message:'نام خانوادگی را وارد نماید'})
            this.showAlert();
        }
        else
        if(this.props.nationalCode ===''){
            this.setState({message:'کد ملی  را وارد نماید'})
            this.showAlert();
        }
        else
        if(this.props.mobile ===''){
            this.setState({message:'شماره  همراه را وارد نماید'})
            this.showAlert();
        }
        else
        if(this.props.phone ===''){
            this.setState({message:'شماره ثابت را وارد نماید'})

            this.showAlert();
        }
        else
        if(this.props.password ===''){
            this.setState({message:'گذر واژه را وارد نماید'})
            this.showAlert();
        }
        else
        // if(this.props.email ===''){
        //     this.setState({message:'ایمیل را وارد نماید'})
        //
        //     this.showAlert();
        // }
        // else
        {
            this.props.navigation.push('stepUploadFile')
        }
}
    render() {
        const {showAlert} = this.state;

        return (


            <View style={styles.container}>

                {/*<ScrollView>*/}
                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                    <Image style={styles.logoIcon} source={require('../../../../../assets/images/logo2.png')}/>
                </View>
                <View style={{flex: 1, marginTop: 50, justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize: 22, fontFamily: 'IRANSansMobile'}}>فرم عضویت در آپ دس پز</Text>
                </View>
                <View styles={{flex: 14}}>

                        <TextInput style={styles.inputs}
                                   placeholder="نام "
                                   keyboardType='text'
                                   // autoFocus={true}
                                   value={this.props.firstName}
                                   onChangeText={this.onFirstNameChange.bind(this)}/>



                        <TextInput style={styles.inputs}
                                   placeholder="نام خانوادگی "
                                   keyboardType='text'
                                   underlineColorAndroid='transparent'
                                   value={this.props.lastName}
                                   onChangeText={this.onLastnameChange.bind(this)}/>



                        <TextInput style={styles.inputs}
                                   placeholder="شماره ملی"
                                   keyboardType='numeric'
                                   maxLength={10}
                                   underlineColorAndroid='transparent'
                                   value={this.props.nationalCode}
                                   onChangeText={this.onNationalCodeChanged.bind(this)}/>


                        <TextInput style={styles.inputs}
                                   placeholder="شماره تماس(همراه)"
                                   keyboardType='numeric'
                                   maxLength={11}
                                   underlineColorAndroid='transparent'
                                   value={this.props.mobile}
                                   onChangeText={this.onMobileChange.bind(this)}/>



                        <TextInput style={styles.inputs}
                                   placeholder=" شماره تماس (ثابت)"
                                   keyboardType='numeric'
                                   maxLength={11}
                                   underlineColorAndroid='transparent'
                                   value={this.props.phone}
                                   onChangeText={this.onPhoneChanged.bind(this)}/>

                    <TextInput style={styles.inputs}
                               placeholder=" رمز عبور"
                               keyboardType='text'
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               value={this.props.password}
                               onChangeText={this.onPasswordChange.bind(this)}/>

                        <TextInput style={styles.inputs}
                                   placeholder=" ایمیل(اختیاری)"
                                   keyboardType='email'
                                   underlineColorAndroid='transparent'
                                   value={this.props.email}
                                   onChangeText={this.onEmailChanged.bind(this)}/>



                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{alignItems: 'center', fontFamily: 'IRANSansMobile'}}>
                        <FontAwesomeIcon
                            icon={faInfoCircle} size={30} style={{color: 'red'}}/>شرایط عضویت </Text>
                </View>
                <View style={{height: 45, flexDirection: 'row-reverse',}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button block style={{backgroundColor: '#fa1d7a'}}  onPress={() => this.props.navigation.push('Location')} >
                            <Text style={{color: '#fff', fontFamily: 'IRANSansMobile'}}>مرحله قبلی</Text>
                        </Button>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button block style={{backgroundColor: '#00bfa5'}}   onPress={() => this.onValidationForm()}>
                            <Text style={{color: '#fff', fontFamily: 'IRANSansMobile'}}>مرحله بعدی</Text>
                        </Button>

                    </View>
                </View>

                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="اخطار"
                    message={this.state.message}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize:14,fontFamily:'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize:15,fontFamily:'IRANSansMobile(FaNum)'}}
                    confirmText="بله"
                    confirmButtonColor="#DD6B55"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{fontSize:17,fontFamily:'IRANSansMobile(FaNum)'}}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

                {/*</ScrollView>*/}
            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        responsiveBox: {
            width: wp('95%'),
            height: hp('8%'),
            marginBottom: hp('2%'),
            flexDirection: 'column',
            justifyContent: 'space-around',
            fontFamily: 'IRANSansWeb(FaNum)_Bold',

            borderBottomColor: '#ff4500',
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 1,
        },
        responsiveBoxTextarea: {
            width: wp('95%'),
            height: hp('12%'),
            marginBottom: hp('2%'),
            marginTop: hp('3%'),
            flexDirection: 'column',
            borderBottomColor: '#ff4500',
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
            borderBottomWidth: 1,
            justifyContent: 'space-around',
            fontFamily: 'IRANSansWeb(FaNum)_Bold',
        },

        containerCamera: {
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        logoIcon: {
            width: 80,
            height: 80,
            marginBottom: 10,
            marginTop: 10
        },
        icon: {
            color: '#212121'
        },
        sub_Product: {
            paddingRight: hp('2%'),
            fontFamily: 'IRANSansWeb(FaNum)',
            color: '#00bfa5'
        },
        ImageContainer: {
            borderRadius: 10,
            width: wp('80%'),
            height: 200,
            borderColor: '#909898',
            borderWidth: 1 / PixelRatio.get(),
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'IRANSansWeb(FaNum)',
            backgroundColor: '#e0e0e0',
            // marginBottom: 10,
            marginLeft: hp('5%')
        },
        textImage: {
            fontFamily: 'IRANSansWeb(FaNum)',
            color: '#ffffff',
            fontSize: 16
        },
        textArea: {
            height: 150,
            marginLeft: 16,
            borderBottomColor: '#FFFFFF',
            flex: 1,
            fontSize: 15,
            textAlign: 'right',
            fontFamily: 'IRANSansWeb(FaNum)',
        },
        inputContainer: {
            borderBottomColor: '#777777',
            backgroundColor: '#FFFFFF',
            // borderRadius: 30,
            borderBottomWidth: 1,
            // width:100%,
            // height:45,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        inputs: {
            fontFamily: 'IRANSansMobile(FaNum)',
            textAlign: 'right',
            borderRadius: 8,
            borderColor: '#33b5e5',
            borderWidth: 1,
            marginHorizontal: 15,
            marginVertical: 4,
            fontSize:17,
        },

        loginText: {
            fontFamily: 'IRANSansWeb(FaNum)',
            // fontSize: 16,
            marginTop: 20,
            color: 'white',
        },

        buttonContainer: {

            justifyContent: 'center',
            alignItems: 'center',

        },
        btnUploadContainer: {
            height: 40,
            flexDirection: 'row',
            backgroundColor: '#00bfa5',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: hp('2%'),
            marginTop: hp('1%'),
            marginLeft: hp('10%'),
            width: wp('50%'),
            // borderRadius:30,

        },
        loginButton: {
            backgroundColor: "#00bfa5",

        },
        btnUpload: {
            backgroundColor: "#ff4500",
            borderRadius: 30
        },
        title: {
            marginRight: hp('1%'),
            marginLeft: 40,
            fontFamily: 'IRANSansWeb(FaNum)',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 15,
        },
        container: {
            flex: 1,
            marginTop: hp('1%'),
            backgroundColor: "#ffffff"
        },
        contentList: {
            flex: 1,
            flexDirection: 'row',
            textAlign: 'center',

        },
        cardContent: {
            // paddingLeft:60,
            marginTop: 10,

            alignSelf: 'flex-end',

        },
        image: {
            width: 90,
            height: 90,
            borderRadius: 30,
            borderWidth: 2,
            // marginLeft:150,
            borderColor: "#ebf0f7"
        },

        card: {
            shadowColor: '#00000021',
            shadowOffset: {
                width: 0,
                height: 6,
            },
            width: wp('90%'),
            height: hp('15%'),
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,

            // marginLeft: hp('10%'),
            // marginRight: hp('10%'),
            marginBottom: hp('2%'),
            backgroundColor: "white",
            flexDirection: 'row',
            borderRadius: 30,
        },

        name: {
            fontSize: 18,
            flex: 1,

            paddingRight: hp('1%'),
            fontFamily: 'IRANSansWeb(FaNum)',
            alignSelf: 'flex-end',
            color: "#ff4500",

        },

        followButton: {
            marginTop: 10,
            height: 35,
            width: 100,
            marginRight: hp('25%'),
            alignSelf: 'flex-start',
        },
        followButtonText: {
            color: "#ffffff",
            fontFamily: 'IRANSansWeb(FaNum)',
            fontSize: 12,
        },
    });

const mapStateToProps = state => {
    return {
        firstName: state.registerSeller1.firstName,
        lastName: state.registerSeller1.lastName,
        nationalCode: state.registerSeller1.nationalCode,
        nationalCardURL: state.registerSeller1.nationalCardURL,
        mobile: state.registerSeller1.mobile,
        phone: state.registerSeller1.phone,
        email: state.registerSeller1.email,
        address: state.registerSeller1.address,
        certificatesURL: state.registerSeller1.certificatesURL,
        profileURL: state.registerSeller1.profileURL,
        password: state.registerSeller1.password,
        loading: state.registerSeller1.loading,
        error: state.registerSeller1.error
    }
}
export default connect(mapStateToProps, {
    firstNameChanged,
    lastNameChanged,
    nationalCodeChanged,
    phoneChanged,
    emailChanged,
    certificateURLChanged,
    profileURLChanged,
    addressChanged,
    nationalCardURLChanged,
    mobileChanged,
    passwordChanged,
    registerSeller
})(StepAtributUser);
function vmsNationalCode(input) {
    if (!/^\d{10}$/.test(input)
        || input==='0000000000'
        || input==='1111111111'
        || input==='2222222222'
        || input==='3333333333'
        || input==='4444444444'
        || input==='5555555555'
        || input==='6666666666'
        || input==='7777777777'
        || input==='8888888888'
        || input==='9999999999')
        return false;
    var check = parseInt(input[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i);
    }
    sum %= 11;
    return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}
