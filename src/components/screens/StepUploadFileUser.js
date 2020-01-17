import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View
    , PixelRatio,TouchableOpacity,Button
} from "react-native";
import ImagePicker from 'react-native-image-picker'

class StepUploadFileUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile   : '',
            password: '',
            ImageSource:null,
            ImageSourceNationalCard:null,
            ImageSourceBirthcertificate:null,
            path:null
        }
    }
    SelectPhotoToppedNationalCard(){
        const options = {
            title: 'تصویر کارت ملی خود را انتخاب کنید',
            takePhotoButtonTitle:'انتخاب عکس با دوربین',
            chooseFromLibraryButtonTitle:'انتخاب عکس از گالری',
            cancelButtonTitle:'انصراف',
            quality:1.0,
            maxWidth:500,
            maxHeight:500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }else if (response.error) {
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
    SelectPhotoToppedBirthcertificate(){
        const options = {
            title: 'تصویر شناسنامه خود را انتخاب کنید',
            takePhotoButtonTitle:'انتخاب عکس با دوربین',
            chooseFromLibraryButtonTitle:'انتخاب عکس از گالری',
            cancelButtonTitle:'انصراف',
            quality:1.0,
            maxWidth:500,
            maxHeight:500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }else if (response.error) {
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

    onClickListener = (viewId) => {
        Alert.alert("ایجاد حساب کاربری", " بی تربیت "+viewId);
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize: 15,fontFamily:'IRANSansWeb(FaNum)',marginRight:10,marginLeft:10}}>
                        در این مرحله، تصاویری از کارت ملی و شناسنامه خود را در قسمت های مربوطه آپلود نمائید.
                    </Text>
                </View>
                <TouchableOpacity onPress={this.SelectPhotoToppedNationalCard.bind(this)}>
                    <View style={styles.ImageContainer}>
                        {
                            this.state.ImageSourceNationalCard===null ?<Text style={styles.textImage}> انتخاب کارت ملی</Text>:
                                <Image style={styles.ImageContainer} source={this.state.ImageSourceNationalCard}/>
                        }
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={this.SelectPhotoToppedBirthcertificate.bind(this)}>
                    <View style={styles.ImageContainer}>
                        {
                            this.state.ImageSourceBirthcertificate===null ?<Text style={styles.textImage}> انتخاب  شناسنامه</Text>:
                                <Image style={styles.ImageContainer} source={this.state.ImageSourceBirthcertificate}/>
                        }
                    </View>

                </TouchableOpacity>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>آپلود مدارک</Text>
                </TouchableHighlight>


                <View style={styles.btnContainert}>
                    <View style={styles.btnPrev}>
                        <Text style={styles.btnPrevText}> مرحله قبلی  </Text>
                    </View>
                    <View style={styles.btnNext}>
                        <Text style={styles.btnNextText}> مرحله بعدی  </Text>
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    btnNextText:{
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        color:'#ffffff',
        elevation: 19,
        fontFamily:'IRANSansWeb(FaNum)'
    },
    btnPrevText:{
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        color:'#ffffff',
        elevation: 19,
        fontFamily:'IRANSansWeb(FaNum)'
    },
    ImageContainer:{
        borderRadius:10,
        width:300,
        height:200,
        borderColor:'#909898',
        borderWidth:1/PixelRatio.get(),
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'IRANSansWeb(FaNum)',
        backgroundColor:'#777777',
        marginBottom: 10
    },
    textImage:{
        fontFamily:'IRANSansWeb(FaNum)',
        color:'#ffffff',
        fontSize: 16
    },

    container: {
        marginTop:20,
        marginBottom:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },


    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:30,
        fontFamily:'IRANSansWeb(FaNum)'
    },
    loginButton: {
        backgroundColor: "#fa1d7a",
    },
    btnContainert:{
        flexDirection: 'row',
    },
    btnPrev:{
        height:45,
        marginRight:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:120,
        borderRadius:30,
        backgroundColor: "#fa1d7a",
        fontFamily:'IRANSansWeb(FaNum)'
    },
    btnNext: {
        height:45,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:120,
        borderRadius:30,
        backgroundColor: "#fa1d7a",
        fontFamily:'IRANSansWeb(FaNum)'
    },
    logoIcon:{
        width:140,
        height:140,
        justifyContent: 'center',
    },
    loginText: {
        fontFamily:'IRANSansWeb(FaNum)',
        fontSize:20,
        color: 'white',
    },
    forgetPassword:{
        fontFamily:'IRANSansWeb(FaNum)'
    },
    register:{
        fontFamily:'IRANSansWeb(FaNum)'

    }
});


export default StepUploadFileUser;