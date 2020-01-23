import * as React from 'react';
import {
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    StyleSheet,

    Image,
    TextInput,
    View,
    FlatList,
    Text,
    TouchableHighlight
} from 'react-native';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ImagePicker from 'react-native-image-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faInfo, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {CheckBox, Button} from "native-base";

class StepAtributUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                {/*<ScrollView>*/}
                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                    <Image style={styles.logoIcon} source={require('../../../../assets/images/logo2.png')}/>
                </View>
                <View style={{flex: 1, marginTop: 50, justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize: 22, fontFamily: 'IRANSansMobile'}}>فرم عضویت دس پز</Text>
                </View>
                <View styles={{flex: 14}}>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                                   placeholder="نام "
                                   keyboardType='text'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(ProductName) => this.setState({ProductName})}/>

                    </View>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                                   placeholder="نام خانوادگی "
                                   keyboardType='text'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(ProductName) => this.setState({ProductName})}/>

                    </View>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                                   placeholder="شماره ملی"
                                   keyboardType='numeric'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(ProductName) => this.setState({ProductName})}/>

                    </View>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                                   placeholder="شماره تماس(همراه)"
                                   keyboardType='numeric'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(ProductName) => this.setState({ProductName})}/>

                    </View>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                                   placeholder=" شماره تماس (ثابت)"
                                   keyboardType='numeric'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(ProductName) => this.setState({ProductName})}/>

                    </View>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                                   placeholder=" ایمیل(اختیاری)"
                                   keyboardType='email'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(ProductName) => this.setState({ProductName})}/>

                    </View>

                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent: 'center'}}>
                    <Text style={{alignItems:'center',fontFamily: 'IRANSansMobile'}}><FontAwesomeIcon icon={faInfoCircle} size={ 30 } style={{color:'red'} }/>شرایط عضویت </Text>
                </View>
                <View style={{flexDirection: 'row-reverse', backgroundColor: '#00bfa5'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyle}  onPress={() => this.props.navigation.push('Login')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile'}}> ورود  </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('stepUploadFile')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile'}}> مرحله بعدی
                        </Text></Button>

                    </View>
                </View>

                {/*</ScrollView>*/}
            </View>
        );
    }
}

class StepUploadFileUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            ImageSource: null,
            ImageSourceNationalCard: null,
            ImageSourceBirthcertificate: null,
            path: null
        }
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
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = {uri: response.uri};
                this.setState({
                    ImageSourceNationalCard: source

                });

                this.setState({
                    path: response.data

                })
            }
        })
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
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = {uri: response.uri};

                this.setState({
                    ImageSourceBirthcertificate: source

                })
                this.setState({
                    path: response.data

                })
            }
        })
    }


    render() {
        return (

            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 15, fontFamily: 'IRANSansMobile', marginRight: 10, marginLeft: 10}}>
                        در این مرحله، تصاویری از کارت ملی و شناسنامه خود را در قسمت های مربوطه آپلود نمائید.
                    </Text>
                </View>
                <View style={{flex: 4}}>
                    <View style={{textAlign:'center'}}>

                        <Text style={{fontSize:19,color:'#fa1d7a', fontFamily: 'IRANSansMobile',textAlign:'center'}}>1-آپلود تصویر کارت ملی</Text>
                    </View>
                    <TouchableOpacity onPress={this.SelectPhotoToppedNationalCard.bind(this)}>
                        <View style={styles.ImageContainer}>
                            {
                                this.state.ImageSourceNationalCard === null ?
                                    <Text style={styles.textImage}> <FontAwesomeIcon icon={ faCamera} size={ 60 } style={ styles.icon } />  </Text> :
                                    <Image style={styles.ImageContainer} source={this.state.ImageSourceNationalCard}/>
                            }
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={{flex: 4}}>
                    <View style={{textAlign:'center'}}>

                    <Text style={{fontSize:19,color:'#fa1d7a', fontFamily: 'IRANSansMobile',textAlign:'center'}}>2-آپلود تصویر شناسنامه</Text>
                    </View>
                    <TouchableOpacity onPress={this.SelectPhotoToppedBirthcertificate.bind(this)}>

                        <View style={styles.ImageContainer}>
                            {
                                this.state.ImageSourceBirthcertificate === null ?
                                    <Text style={styles.textImage}> <FontAwesomeIcon icon={ faCamera} size={ 60 } style={ styles.icon }/> </Text> :
                                    <Image style={styles.ImageContainer}
                                           source={this.state.ImageSourceBirthcertificate}/>
                            }
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('Home')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile'}}> مرحله قبلی  </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('stepFinal')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile'}}> مرحله بعدی
                        </Text></Button>

                    </View>
                </View>
            </View>
        );
    }
}


class StepFinalUser extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:14,marginTop:hp('20%')}}>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                               placeholder="نام کاربری "
                               keyboardType = 'numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
                    <View style={styles.responsiveBox}>
                        <TextInput style={styles.inputs}
                               placeholder=" گذر واژه"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>
                    <View style={{flexDirection:'row-reverse'}}>
                        <View style={{flex:1,alignItems:'center',marginRight:hp('10%')}}>
                            <CheckBox
                                checked={true}
                                style={{backgroundColor:'#fa1d7a'}}
                            />
                        </View>
                        <View style={{flex:8,textAlign:'right'}}>
                        <Text style={{fontFamily: 'IRANSansMobile',}}>
                            شرایط اپ را می پذیرم
                        </Text>
                        </View>

                    </View>
                </View>
                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('stepUploadFile')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile'}}> مرحله قبلی  </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('DashboardSeller')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile'}}> ثبت نام
                        </Text></Button>

                    </View>
                </View>





            </View>
        );
    }
}


const RootStack = createStackNavigator({
    Home: {
        screen: StepAtributUser, navigationOptions: ({navigation}) => ({
            header: null,
            // title: ` فروشنده محترم، به آپ دس پز خوش آمدید`,
            headerStyle: {
                backgroundColor: '#00bfa5',

            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('5%'),
                fontFamily: 'IRANSansMobile',
                color: '#ffffff',
                fontSize: 16
            },
        }),
    },
    stepUploadFile: {
        screen: StepUploadFileUser, navigationOptions: ({navigation}) => ({
            // header: null,
            title: `مرحله دوم:آپلود مدارک  `,
            headerStyle: {
                backgroundColor: '#00bfa5',
            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('10%'),
                fontFamily: 'IRANSansMobile',
                color: '#ffffff',
                fontSize: 16
            },
        })
    },
    stepFinal: {
        screen: StepFinalUser, navigationOptions: ({navigation}) => ({
            // header: null,
            title: `مرحله سوم: نام کاربری و رمز ورود  `,
            headerStyle: {
                backgroundColor: '#00bfa5',

            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('10%'),
                fontFamily: 'IRANSansMobile',
                color: '#ffffff',
                fontSize: 16
            },
        })
    }
});
const styles = StyleSheet.create(
    {
        buttonstyle: {
            justifyContent: 'center',
            width:"100%",
            fontFamily:'Iranian Sans',
            fontSize:22,
            shadowColor: '#00000021',
            backgroundColor:'#fa1d7a',
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
            width:"100%",
            fontFamily:'Iranian Sans',
            fontSize:22,
            shadowColor: '#00000021',
            backgroundColor:'#00bfa5',
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
            height: hp('8%'),
            marginBottom: hp('2%'),
            flexDirection: 'column',
            justifyContent: 'space-around',
            fontFamily: 'IRANSansMobile',

            borderBottomColor: '#fa1d7a',
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 1,
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
            fontFamily: 'IRANSansMobile',
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
            fontFamily: 'IRANSansMobile',
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
            fontFamily: 'IRANSansMobile',
            backgroundColor: '#e0e0e0',
            // marginBottom: 10,
            marginLeft: hp('5%')
        },
        textImage: {
            fontFamily: 'IRANSansMobile',
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
            fontFamily: 'IRANSansMobile',
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
            height: 45,
            marginLeft: 16,
            borderBottomColor: '#FFFFFF',
            flex: 1,
            fontSize: 15,
            textAlign: 'right',
            fontFamily: 'IRANSansMobile',
        },

        loginText: {
            fontFamily: 'IRANSansMobile',
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
            backgroundColor: "#fa1d7a",
            borderRadius: 30
        },
        title: {
            marginRight: hp('1%'),
            marginLeft: 40,
            fontFamily: 'IRANSansMobile',
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
            fontFamily: 'IRANSansMobile',
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
            fontFamily: 'IRANSansMobile',
            fontSize: 12,
        },
    });
export default createAppContainer(RootStack);