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
    TouchableHighlight, Alert
} from 'react-native';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ImagePicker from 'react-native-image-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faInfo, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {CheckBox, Button} from "native-base";
import {Component} from "react";
import {Avatar, Card, Switch, Title, Paragraph} from "react-native-paper";
class StepProductsCategorization extends Component {
    constructor(props) {
        super(props);
        this.state = {

            modalVisible:false,
            userSelected:[],
            data: [
                {
                    id: 1,
                    name: "شیرینی",
                    sub_Product: "خشک،تر،لیمویی و ...",
                    image: require('../../../../assets/images/6.jpg'),
                    isSwitchOn: true
                },
                {
                    id: 2,
                    name: "حلوا",
                    sub_Product: "ساده،مجلسی،زنجبیلی و ...",
                    image: require('../../../../assets/images/1.jpg'),
                    isSwitchOn: true
                },
                {
                    id: 3,
                    name: "دسر",
                    sub_Product: "لیمو،نارگیل،یاقوتی و ...",
                    image: require('../../../../assets/images/2.jpg'),
                    isSwitchOn: false
                },
                {
                    id: 4,
                    name: "شکلات",
                    sub_Product: "سیاه،شیری،تخته ای و ...",
                    image: require('../../../../assets/images/3.jpg'),
                    isSwitchOn: true
                },
                {
                    id: 5,
                    name: " کیک",
                    sub_Product: "پرتقالی،عسلی،کنجدی و ...",
                    image: require('../../../../assets/images/3.jpg'),
                    isSwitchOn: false
                },
                {
                    id: 6,
                    name: "محصولات محلی",
                    sub_Product: "لواشک،رب گوجه،ترخینه و ...",
                    image: require('../../../../assets/images/4.jpg'),
                    isSwitchOn: false
                },
                {
                    id: 7,
                    name: " نان",
                    sub_Product: "تنوری،فانتزی،بربری و ...",
                    image: require('../../../../assets/images/5.jpg'),
                    isSwitchOn: true
                },

            ]
        };
    }

    handleChange = (event, index) => {
        const { value } = event;

        this.setState(previousState => {
            const data = [...previousState.data];
            data[index] = {...data[index], isSwitchOn: event };
console.log(data[index]);
            return { data };

        }

        );
    };

    render() {
        const { isSwitchOn } = this.state.data;
        return (
            <View style={styles.container}>

                <View style={{backgroundColor:'rgba(210,210,210,0.35)',justifyContent:'center',}}>

                    <Card>

                        <Card.Content>
                            <Title style={{textAlign:'right'}}> انتخاب محصول</Title>
                            <Paragraph style={{textAlign:'right'}}>                        فروشنده محترم، در کدام یک از دسته های زیر توانایی تامین و تهیه محصول را دارید. هر کدام از دسته های زیر جزء توانایی های شماست آنرا انتخاب کنید.
                            </Paragraph>
                        </Card.Content>
                    </Card>

                </View>
                <FlatList

                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {

                        return (
                            <View>
                                <Card style={{borderWidth:1,borderColor:'#0099CC',marginBottom:20,marginHorizontal:10}}>
                                    <Card.Title
                                        title={item.name}
                                        titleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15}}
                                        subtitle={item.sub_Product}
                                        subtitleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15}}

                                        right={(data) => <Avatar.Image size={70} source={item.image} />}
                                        left={(props) =>  <Switch style={styles.followButton}
                                                                  value={item.isSwitchOn}
                                                                  onValueChange={(event) => {
                                                                      this.handleChange(event,item.id)
                                                                  }
                                                                  }
                                        />
                                        }
                                    />
                                </Card>

                            </View>
                        )
                    }}/>
                <View style={styles.containerBottom}>
                    <Button  style={{ fontFamily: 'IRANSansMobile(FaNum)'}} title="ثبت و مرحله بعد" color='#00bfa5'  onPress={() => this.props.navigation.push('StepAtributUser')}/>

                </View>

            </View>
        );
    }
};
class StepAtributUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <View style={{flex: 1,marginTop:10}}>
                <ScrollView>
                    <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                        <Image style={styles.logoIcon} source={require('../../../../assets/images/logo2.png')}/>
                    </View>
                    <View style={{flex: 2}}>

                        <TextInput
                            style={styles.inputs}
                            placeholder='نام خود را وارد نمائید'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder='نام خانوادگی خود را وارد نمائید'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder='شماره تماس(همراه) خود را وارد نمائید'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder='شماره تلفن(ثابت) خود را وارد نمائید'
                            autoCapitalize="none"
                            keyboardType='numeric'
                            placeholderTextColor='#777'
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder='استان خود را وارد نمائید'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder='شهر خود را وارد نمائید'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder='ایمیل خود را وارد نمائید(اختیاری)'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{flex:1,height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#de481e'}}>
                        <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={() => this.props.navigation.push('stepFinal')}>
                            <View style={{flex:2,justifyContent:'center',alignItems:'center'}} >
                                <Text style={{color:'white',fontFamily: 'IRANSansMobile'}}>  مرحله بعدی</Text>

                            </View>

                        </TouchableOpacity>
                    </View>




                </ScrollView>


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
                    <Text style={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)', marginRight: 10, marginLeft: 10}}>
                        در این مرحله، تصاویری از کارت ملی و شناسنامه خود را در قسمت های مربوطه آپلود نمائید.
                    </Text>
                </View>
                <View style={{flex: 4,backgroundColor:'#fffddd'}}>
                    <View style={{textAlign:'center'}}>

                        <Text style={{fontSize:19,color:'#fa1d7a', fontFamily: 'IRANSansMobile(FaNum)',textAlign:'center'}}>1-آپلود تصویر کارت ملی</Text>
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

                    <Text style={{fontSize:19,color:'#fa1d7a', fontFamily: 'IRANSansMobile(FaNum)',textAlign:'center'}}>2-آپلود تصویر شناسنامه</Text>
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
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('Home')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile(FaNum)'}}> مرحله قبلی  </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}  onPress={() => this.props.navigation.push('stepFinal')}><Text style={{color:'#fff',fontFamily: 'IRANSansMobile(FaNum)'}}> مرحله بعدی
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
                fontFamily: 'IRANSansMobile(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },
        }),
    },
    StepAtributUser:{
        screen: StepProductsCategorization, navigationOptions: ({navigation}) => ({
            // header: null,
            title: `مرحله اول:انتخاب دسته محصول `,
            headerStyle: {
                backgroundColor: '#00bfa5',
            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('10%'),
                fontFamily: 'IRANSansMobile(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },
        })

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
                fontFamily: 'IRANSansMobile(FaNum)',
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
                fontFamily: 'IRANSansMobile(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },
        })
    },

},
    {
        initialRouteName: 'Home',
    },
    );
const styles = StyleSheet.create(
    {
        buttonstyle: {
            justifyContent: 'center',
            width:"100%",
            fontFamily:'IRANSansMobile(FaNum)',
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
            fontFamily:'IRANSansMobile(FaNum)',
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
            fontFamily: 'IRANSansMobile(FaNum)',
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
            borderColor: '#0099CC',
            borderWidth: 1,
            marginHorizontal: 8,
            marginVertical: 4
        },

        loginText: {
            fontFamily: 'IRANSansMobile(FaNum)',
            // fontSize: 16,
            marginTop: 20,
            color: 'white',
        },
        containerBottom: {
            backgroundColor: '#00bfa5',
            fontFamily: 'IRANSansMobile(FaNum)',
            color:'#fff'
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
export default createAppContainer(RootStack);
