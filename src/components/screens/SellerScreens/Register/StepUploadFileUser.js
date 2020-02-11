import React, {Component} from 'react';
import {
    Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View
    , PixelRatio, ScrollView, NativeModules
} from "react-native";
import {CheckBox, Button} from "native-base";
import AwesomeAlert from 'react-native-awesome-alerts';

import ImagePicker1 from 'react-native-image-picker';

var ImagePicker = NativeModules.ImageCropPicker;
import {Provider as PaperProvider} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faFileImage, faInfo, faInfoCircle, faTimes, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Avatar, Card, Switch, Title, Paragraph, Dialog, Portal, Divider} from "react-native-paper";
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
    nationalDataChanged,
    certificateDataChanged,
    registerSeller, cityChanged, provinceChanged,
} from "../../../../action/Seller/RegisterSellerAction";
import {connect} from "react-redux";
import axios from "axios";
import RNFetchBlob from 'rn-fetch-blob'


class StepUploadFileUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataImage: [],
            ImageSource: null,
            pic: null,
            data: null,
            Image_TAG: '',
            ImageSourceNationalCard: null,
            ImageDataNationalCard: null,

            ImageSourceBirthcertificate: null,
            ImageDataCeBirthcertificate: null,

            path: null,
            showAlert: false,

        }
        // alert(this.props.firstName)
    }


    SelectPhotoToppedBirthcertificate() {
        const options = {
            title: 'تصویر شناسنامه خود را انتخاب کنید',
            takePhotoButtonTitle: 'انتخاب عکس با دوربین',
            chooseFromLibraryButtonTitle: 'انتخاب عکس از گالری',
            cancelButtonTitle: 'انصراف',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker1.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = {uri: response.uri};
                this.setState({
                    ImageSourceBirthcertificate: source,
                    ImageDataCeBirthcertificate: response.data,
                })
                this.props.certificateDataChanged(response);


            }
        })
    }

    SelectPhotoToppedNationalCard() {
        const options = {
            title: 'تصویر کارت ملی خود را انتخاب کنید',
            takePhotoButtonTitle: 'انتخاب عکس با دوربین',
            chooseFromLibraryButtonTitle: 'انتخاب عکس از گالری',
            cancelButtonTitle: 'انصراف',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker1.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = {uri: response.uri};
                this.setState({
                    ImageSourceNationalCard: source,
                    ImageDataNationalCard: response.data

                });
                this.props.nationalDataChanged(response);


            }
        })
    }

    onRegisterSeller1() {
        const {firstName, lastName, mobile, address, nationalCode, certificatesURL, nationalCardURL, phone, email, password, province, city, nationalData, certificateData} = this.props;

        if (this.state.ImageSourceNationalCard ===null)
            alert('تصویر کارت ملی را وارد کنید')
        else if (this.state.ImageSourceBirthcertificate ===null)
            alert('تصویر کارت شناسنامه را لود کنید')

        else {
            this.props.registerSeller({
                firstName,
                lastName,
                mobile,
                address,
                nationalCode,
                certificatesURL,
                nationalCardURL,
                phone,
                email,
                password,
                province,
                nationalData,
                certificateData,
                city,
            });
            if (this.props.success === true) {
                this.showAlert();

            }
        }
    }

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

    removeImagenational=()=> {
        this.setState({ImageSourceNationalCard:null})

    }
    removeImagecertificate=()=> {
        this.setState({ImageSourceBirthcertificate:null})

    }
    render() {
        const {showAlert} = this.state;
        return (

            <View style={styles.container}>
                {/*<Text>{this.props.error}</Text>*/}

                <ScrollView>
                    <View style={{
                        borderColor: '#33b5e5',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{
                                fontSize: 15,
                                paddingVertical: 10,
                                fontFamily: 'IRANSansMobile',
                                backgroundColor: '#0099CC',
                                color: '#fff',
                                textAlign: 'center',
                                borderRadius: 5
                            }}>
                                تصویر کارت ملی
                            </Text>
                        </View>
                        <Divider style={{backgroundColor: '#33b5e5'}}/>
                        <View style={{height: 170, marginTop: 20, flex: 1, flexDirection: 'row',}}>
                            <View style={{

                                flex: 4,
                                borderRadius: 10,
                                marginLeft: 10,
                                marginRight: 4,
                                borderWidth: 1,
                                borderColor: '#0099CC',
                                borderStyle: 'dotted',
                                backgroundColor: '#0099CC',
                                color: '#fff',
                                marginTop: 20,
                                width: 160,
                                height: 120,

                                justifyContent: 'center', alignItems: 'center'
                            }}
                            >
                                <View style={{flex: 1,}}>
                                    <FontAwesomeIcon icon={faFileImage} size={60}
                                                     style={{marginTop: 10, color: '#fff'}}
                                                     onPress={this.SelectPhotoToppedNationalCard.bind(this)}

                                    />
                                </View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontFamily: 'IRANSansMobile(FaNum)',
                                        fontSize: 12,
                                        marginTop: -50,
                                        color: '#fff',
                                        borderBottomRightRadius: 5,

                                        borderBottomLeftRadius: 5,
                                        // backgroundColor: '#de481e',
                                    }}>
                                    انتخاب تصویر کارت ملی</Text>
                            </View>
                            <View style={{
                                height: 150,
                                marginLeft: 20,
                                flex: 9,
                                marginHorizontal: 5,
                                borderColor: '#0099CC',
                                borderStyle: 'dotted',
                                borderWidth: 2,
                                borderRadius: 10
                            }}>
                                <Image source={this.state.ImageSourceNationalCard}
                                       style={{
                                           borderRadius: 10,
                                           marginLeft: 4,
                                           marginRight: 4,
                                           marginTop: 2,
                                           marginBottom: 2,
                                           width: 230,
                                           height: 140,
                                           resizeMode: 'cover'
                                       }}
                                />
                                <FontAwesomeIcon icon={faTimesCircle} size={25} style={{
                                    color: 'red',
                                    marginTop: 1,
                                    zIndex: 9999,
                                    position: 'absolute',
                                    alignSelf: 'flex-end'
                                }} onPress={() => this.removeImagenational()}/>

                            </View>
                        </View>
                    </View>
                    <View style={{
                        borderColor: '#33b5e5',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{
                                fontSize: 15,
                                paddingVertical: 10,
                                fontFamily: 'IRANSansMobile',
                                backgroundColor: '#0099CC',
                                color: '#fff',
                                textAlign: 'center',
                                borderRadius: 5
                            }}>
                                تصویر شناسنامه
                            </Text>
                        </View>
                        <Divider style={{backgroundColor: '#33b5e5'}}/>
                        <View style={{height: 180, marginTop: 20, flex: 13, flexDirection: 'row'}}>
                            <View style={{

                                flex: 4,
                                borderRadius: 10,
                                marginLeft: 10,
                                marginRight: 4,
                                borderWidth: 1,
                                borderColor: '#dddddd',
                                marginTop: 20,
                                backgroundColor: '#0099CC',

                                width: 160,
                                height: 120,
                                justifyContent: 'center', alignItems: 'center'
                            }}
                            >
                                <View style={{flex: 1}}>
                                    <FontAwesomeIcon icon={faFileImage} size={60}
                                                     style={{marginTop: 10, color: '#fff'}}
                                        // onPress={this._showDialogCertificate}
                                                     onPress={this.SelectPhotoToppedBirthcertificate.bind(this)}
                                    />
                                </View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontFamily: 'IRANSansMobile(FaNum)',
                                        fontSize: 12,
                                        color: '#fff',
                                        borderBottomRightRadius: 5,
                                        borderBottomLeftRadius: 5,
                                        // backgroundColor: '#de481e',
                                    }}>
                                    انتخاب تصویر شناسنامه</Text>
                            </View>
                            <View style={{
                                height: 150,
                                marginLeft: 20,
                                flex: 9,
                                marginHorizontal: 5,
                                borderColor: '#0099CC',
                                borderStyle: 'dotted',
                                borderWidth: 2,
                                borderRadius: 10
                            }}>
                                <Image source={this.state.ImageSourceBirthcertificate}
                                       style={{
                                           borderRadius: 10,
                                           marginLeft: 4,
                                           marginRight: 4,
                                           marginTop: 2,
                                           marginBottom: 2,
                                           width: 230,
                                           height: 140,
                                           resizeMode: 'cover'
                                       }}
                                />
                                <FontAwesomeIcon icon={faTimesCircle} size={25} style={{
                                    color: 'red',
                                    marginTop: 1,
                                    zIndex: 9999,
                                    position: 'absolute',
                                    alignSelf: 'flex-end'
                                }} onPress={() => this.removeImagecertificate()}/>

                            </View>
                        </View>
                    </View>

                </ScrollView>
                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#ff4500'}}>
                        <Button style={styles.buttonstyleNext}

                            onPress={() => this.props.navigation.push('StepAtributeUser')}
                        ><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)'}}> مرحله
                            قبلی </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}

                                onPress={this.onRegisterSeller1.bind(this)}
                            // onPress={() => this.props.navigation.push('DashboardSeller')}
                        ><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)'}}> ثبت نام
                        </Text></Button>

                    </View>
                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="ثبت اطلاعات"
                    message="مشخصات به طور کامل ثبت شد"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize: 14, fontFamily: 'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)'}}
                    confirmText="تائید"
                    confirmButtonColor="#DD6B55"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{fontSize: 17, fontFamily: 'IRANSansMobile(FaNum)'}}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

            </View>
        );
    }
}

const
    styles = StyleSheet.create(
        {
            buttonstyle: {
                justifyContent: 'center',
                width: "100%",
                fontFamily: 'IRANSansMobile(FaNum)',
                fontSize: 22,
                shadowColor: '#00000021',
                backgroundColor: '#ff4500',
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
            },
            buttonstyleNext: {
                justifyContent: 'center',
                width: "100%",
                fontFamily: 'IRANSansMobile(FaNum)',
                fontSize: 22,
                shadowColor: '#00000021',
                backgroundColor: '#de481e',
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
            },
            responsiveBox: {
                width: wp('95%'),
                height: hp('6%'),
                marginBottom: hp('2%'),
                flexDirection: 'column',
                justifyContent: 'space-around',
                fontFamily: 'IRANSansMobile(FaNum)',

                // borderBottomColor: '#fa1d7a',
                backgroundColor: '#FFFFFF',
                // borderBottomWidth: 1,
            },
            responsiveBoxTextarea: {
                width: wp('95%'),
                height: hp('12%'),
                marginBottom: hp('2%'),
                marginTop: hp('3%'),
                flexDirection: 'column',
                borderBottomColor: '#fa1d7a',
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
                borderBottomWidth: 1,
                justifyContent: 'space-around',
                fontFamily: 'IRANSansMobile(FaNum)',
            },

            containerCamera: {
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center'
            },
            logoIcon: {
                width: 100,
                height: 100,
                marginBottom: 10,
                marginTop: 10
            },
            icon: {
                color: '#212121'
            },
            sub_Product: {
                paddingRight: hp('2%'),
                fontFamily: 'IRANSansMobile(FaNum)',
                color: '#de481e'
            },
            ImageContainer: {
                borderRadius: 10,
                width: wp('80%'),
                height: 200,
                borderColor: '#909898',
                borderWidth: 1 / PixelRatio.get(),
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'IRANSansMobile(FaNum)',
                backgroundColor: '#e0e0e0',
                // marginBottom: 10,
                marginLeft: hp('5%')
            },
            textImage: {
                fontFamily: 'IRANSansMobile(FaNum)',
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
                fontFamily: 'IRANSansMobile(FaNum)',
            },

            inputs: {
                fontFamily: 'IRANSansMobile(FaNum)',
                textAlign: 'right',
                borderRadius: 8,
                borderColor: '#33b5e5',
                borderWidth: 1,
                marginHorizontal: 15,
                marginVertical: 4
            },

            loginText: {
                fontFamily: 'IRANSansMobile(FaNum)',
                // fontSize: 16,
                marginTop: 20,
                color: 'white',
            },
            containerBottom: {
                backgroundColor: '#de481e',
                fontFamily: 'IRANSansMobile(FaNum)',
                color: '#fff'
            },
            buttonContainer: {

                justifyContent: 'center',
                alignItems: 'center',

            },
            btnUploadContainer: {
                height: 40,
                flexDirection: 'row',
                backgroundColor: '#de481e',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: hp('2%'),
                marginTop: hp('1%'),
                marginLeft: hp('10%'),
                width: wp('50%'),
                // borderRadius:30,

            },
            loginButton: {
                backgroundColor: "#de481e",

            },
            btnUpload: {
                backgroundColor: "#fa1d7a",
                borderRadius: 30
            },
            title: {
                marginRight: hp('1%'),
                marginLeft: 40,
                fontFamily: 'IRANSansMobile(FaNum)',
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
                fontFamily: 'IRANSansMobile(FaNum)',
                alignSelf: 'flex-end',
                color: "#fa1d7a",

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
                fontFamily: 'IRANSansMobile(FaNum)',
                fontSize: 12,
            },
        });

const
    mapStateToProps = state => {
        return {
            province: state.registerSeller1.province,
            city: state.registerSeller1.city,
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
            nationalData: state.registerSeller1.nationalData,
            certificateData: state.registerSeller1.certificateData,
            loading: state.registerSeller1.loading,
            error: state.registerSeller1.error,
            success: state.registerSeller1.success
        }
    }


export default connect(mapStateToProps, {
    cityChanged,
    provinceChanged,
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
    nationalDataChanged,
    certificateDataChanged,
    registerSeller
})

(
    StepUploadFileUser
)
;
