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
    TouchableHighlight, Alert, NativeModules
} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faFileImage, faInfo, faInfoCircle, faTimes, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {CheckBox, Button} from "native-base";
import {Component} from "react";
import {Avatar, Card, Switch, Title, Paragraph, Dialog, Portal, Divider} from "react-native-paper";
import CodeInput from 'react-native-confirmation-code-input';
import {faSms} from "@fortawesome/free-solid-svg-icons";
import ProgressCircle from 'react-native-progress-circle'

var ImagePicker = NativeModules.ImageCropPicker;

class StepProductsCategorization extends Component {
    constructor(props) {
        super(props);
        this.state = {

            modalVisible: false,
            userSelected: [],
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
        const {value} = event;

        this.setState(previousState => {
                const data = [...previousState.data];
                data[index] = {...data[index], isSwitchOn: event};
                console.log(data[index]);
                return {data};

            }
        );
    };

    render() {
        const {isSwitchOn} = this.state.data;
        return (
            <View style={styles.container}>

                <View style={{backgroundColor: 'rgba(210,210,210,0.35)', justifyContent: 'center',}}>

                    <Card>

                        <Card.Content>

                            <Paragraph style={{textAlign: 'right'}}> فروشنده محترم، در کدام یک از دسته های زیر توانایی
                                تامین و تهیه محصول را دارید. هر کدام از دسته های زیر جزء توانایی های شماست آنرا انتخاب
                                کنید.
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
                                <Card style={{
                                    borderWidth: 1,
                                    borderColor: '#0099CC',
                                    marginBottom: 20,
                                    marginHorizontal: 10
                                }}>
                                    <Card.Title
                                        title={item.name}
                                        titleStyle={{
                                            marginRight: 20,
                                            textAlign: 'right',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            fontSize: 15
                                        }}
                                        subtitle={item.sub_Product}
                                        subtitleStyle={{
                                            marginRight: 20,
                                            textAlign: 'right',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            fontSize: 15
                                        }}

                                        right={(data) => <Avatar.Image size={70} source={item.image}/>}
                                        left={(props) => <Switch style={styles.followButton}
                                                                 value={item.isSwitchOn}
                                                                 onValueChange={(event) => {
                                                                     this.handleChange(event, item.id)
                                                                 }
                                                                 }
                                        />
                                        }
                                    />
                                </Card>

                            </View>
                        )
                    }}/>
                <View style={{

                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#de481e'
                }}>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}
                                      onPress={() => this.props.navigation.push('DashboardSeller')}>
                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontFamily: 'IRANSansMobile'}}> ورود به داشبورد </Text>

                        </View>

                    </TouchableOpacity>
                </View>
                {/*<View style={styles.containerBottom}>*/}
                {/*    <Button style={{fontFamily: 'IRANSansMobile(FaNum)'}} title="ثبت و مرحله بعد" color='#00bfa5'*/}
                {/*            onPress={() => this.props.navigation.push('StepAtributUser')}/>*/}

                {/*</View>*/}

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
            <View style={{flex: 1, marginTop: 10, backgroundColor: '#fff'}}>
                <View
                    style={{flex: 2, marginTop: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>

                    <Card>

                        <Card.Content>

                            <Image style={styles.logoIcon} source={require('../../../../assets/images/logo12.png')}/>

                        </Card.Content>
                    </Card>

                </View>


                <View style={{flex: 9}}>

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


                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('SellerLogin')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile'}}> ورود </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('stepUploadFile')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile'}}> مرحله بعدی
                        </Text></Button>

                    </View>
                </View>
                {/*<View style={{*/}
                {/*    flex: 1,*/}
                {/*    height: 10,*/}
                {/*    justifyContent: 'center',*/}
                {/*    alignItems: 'center',*/}
                {/*    backgroundColor: '#de481e'*/}
                {/*}}>*/}
                {/*    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}*/}
                {/*                      onPress={() => this.props.navigation.push('stepUploadFile')}>*/}
                {/*        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>*/}
                {/*            <Text style={{color: 'white', fontFamily: 'IRANSansMobile'}}> مرحله بعدی</Text>*/}

                {/*        </View>*/}

                {/*    </TouchableOpacity>*/}
                {/*</View>*/}

            </View>
        );
    }
}

const renderImage = (image) => {

    return [
        <>
            <Image style={{
                flex: 4,
                borderRadius: 10,
                marginLeft: 4,
                marginRight: 4,
                marginTop: 2,
                marginBottom:2,
                width: 230,
                height: 150,
                resizeMode: 'cover'
            }} source={image}/>
        </>
    ]
}
const renderImagecertificate = (image) => {

    return [
        <>
            <Image style={{
                flex: 4,
                borderRadius: 10,
                marginLeft: 4,
                marginRight: 4,
                marginTop: 2,
                marginBottom:2,
                width: 230,
                height: 150,
                resizeMode: 'cover'
            }} source={image}/>
        </>
    ]
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
            path: null,
            visible: false,
            visibleDialogCertificate: false,
            image: null,
            images: [],
            imageCertificate: null,
            imagesCertificate: [],
        }
    }

    _showDialog = () => this.setState({visible: true});
    _hideDialog = () => this.setState({visible: false});
    _showDialogCertificate = () => this.setState({visibleDialogCertificate: true});
    _hideDialogCertificate = () => this.setState({visibleDialogCertificate: false});

    pickSingleWithCamera(cropping, mediaType = 'photo') {
        this._hideDialog();
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        }).then(images => {

            this.setState({
                images: this.state.images.concat({
                    uri: images.path,
                    width: images.width,
                    height: images.height,
                    mime: images.mime
                }),
            })
        }).catch(e => alert(e));
    }

    pickMultiple() {
        this._hideDialog();
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
        }).then(images => {
            // this.setState({
            //     images: this.state.images.concat({
            //         uri: images.path,
            //         width: images.width,
            //         height: images.height,
            //         mime: images.mime
            //     }),
            // })
            this.setState({
                image: null,
                images: images.map(i => {
                    console.log('received image', i);
                    return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
            });
        }).catch(e => alert(e));
    }

    cleanupSingleImage(i) {


        ImagePicker.cleanSingle(i ? i.uri : null).then(() => {
            alert(`تصویر با موفقیت حذف شد`);
            console.log(this.state.images);
            this.setState({
                images: this.state.images.filter(item => item.uri != i.uri)
            })
            // this.setState(state => {
            //     const images = this.state.images.filter((uri, j) => i.uri !== j);
            //     return {
            //         images,
            //     };
            // });
        }).catch(e => {
            console.log(this.state.images);
            alert(e);
        })
    }

    renderAsset(image) {
        return renderImage(image);
    }

    pickMultiplecertificate() {
        this._hideDialogCertificate();
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
        }).then(images => {
            // this.setState({
            //     images: this.state.images.concat({
            //         uri: images.path,
            //         width: images.width,
            //         height: images.height,
            //         mime: images.mime
            //     }),
            // })
            this.setState({
                imageCertificate: null,
                imagesCertificate: images.map(i => {
                    console.log('received image', i);
                    return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
            });
        }).catch(e => alert(e));
    }

    cleanupSingleImagecertificate(i) {
        this._hideDialogCertificate();
        ImagePicker.cleanSingle(i ? i.uri : null).then(() => {
            alert(`تصویر با موفقیت حذف شد`);

            this.setState({
                imagesCertificate: this.state.imagesCertificate.filter(item => item.uri != i.uri)
            })
            // this.setState(state => {
            //     const images = this.state.images.filter((uri, j) => i.uri !== j);
            //     return {
            //         images,
            //     };
            // });
        }).catch(e => {
            console.log(this.state.imagesCertificate);
            alert(e);
        })
    }

    pickSingleWithCameracertificate(cropping, mediaType = 'photo') {
        this._hideDialogCertificate();
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        }).then(images => {

            this.setState({
                imagesCertificate: this.state.imagesCertificate.concat({
                    uri: images.path,
                    width: images.width,
                    height: images.height,
                    mime: images.mime
                }),
            })
        }).catch(e => alert(e));
    }

    renderAssetcertificate(image) {
        return renderImagecertificate(image);
    }


    render() {
        return (

            <View style={styles.container}>
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
                                borderColor:'#0099CC',
                                borderStyle:'dotted',
                               backgroundColor:'#0099CC',
                                color:'#fff',
                                marginTop: 20,
                                width: 160,
                                height: 120,

                                justifyContent: 'center', alignItems: 'center'
                            }}
                            >
                                <View style={{flex: 1,}}>
                                    <FontAwesomeIcon icon={faFileImage} size={60} style={{marginTop: 10, color: '#fff'}}
                                                     onPress={this._showDialog}

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
                            <View style={{height: 150, marginLeft: 20, flex: 9,marginHorizontal:5, borderColor:'#0099CC',borderStyle:'dotted', borderWidth:2,borderRadius:10}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}

                                >
                                    {/*{this.state.image ? this.renderAsset(this.state.image) : null}*/}

                                    {this.state.images ? this.state.images.map(i =>
                                        <View
                                            key={i.uri}>{this.renderAsset(i)}
                                            <FontAwesomeIcon icon={faTimesCircle} size={25} style={{
                                                color: 'red',
                                                marginTop: 1,
                                                zIndex: 9999,
                                                position: 'absolute',
                                                alignSelf: 'flex-end'
                                            }} onPress={() => this.cleanupSingleImage(i)}/>
                                            {/*<Button icon="delete" mode="contained" >*/}
                                            {/*    حذف*/}
                                            {/*</Button>*/}


                                        </View>
                                    ) : null
                                    }
                                </ScrollView>
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
                                backgroundColor:'#0099CC',

                                width: 160,
                                height: 120,
                                justifyContent: 'center', alignItems: 'center'
                            }}
                            >
                                <View style={{flex: 1}}>
                                    <FontAwesomeIcon icon={faFileImage} size={60} style={{marginTop: 10, color: '#fff'}}
                                                     onPress={this._showDialogCertificate}

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
                            <View style={{height: 150, marginLeft: 20, flex: 9,marginHorizontal:5, borderColor:'#0099CC',borderStyle:'dotted', borderWidth:2,borderRadius:10}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}

                                >
                                    {/*{this.state.image ? this.renderAsset(this.state.image) : null}*/}

                                    {this.state.imagesCertificate ? this.state.imagesCertificate.map(i =>
                                        <View
                                            key={i.uri}>{this.renderAssetcertificate(i)}


                                            <FontAwesomeIcon icon={faTimesCircle} size={25} style={{
                                                color: 'red',
                                                marginTop: 1,
                                                zIndex: 9999,
                                                position: 'absolute',
                                                alignSelf: 'flex-end'
                                            }} onPress={() => this.cleanupSingleImagecertificate(i)}/>



                                        </View>
                                    ) : null
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <PaperProvider>
                    <Portal>
                        <Dialog style={{zIndex: 99, position: 'relative', fontFamily: 'IRANSansMobile(FaNum)'}}
                                visible={this.state.visible}
                                onDismiss={this._hideDialog}>
                            <Dialog.Title style={{textAlign: 'right'}}>انتخاب تصویر</Dialog.Title>
                            <Dialog.Content style={{fontFamily: 'IRANSansMobile(FaNum)', color: 'red'}}>

                                <Paragraph style={{
                                    fontFamily: 'IRANSansMobile(FaNum)',
                                    color: 'red',
                                    textAlign: 'center',
                                    marginBottom: 20
                                }}
                                           onPress={() => {
                                               this.pickMultiple();
                                           }}
                                >گالری</Paragraph>


                                <Paragraph
                                    style={{fontFamily: 'IRANSansMobile(FaNum)', color: 'red', textAlign: 'center'}}
                                    onPress={() => {
                                        this.pickSingleWithCamera();
                                    }}
                                >دوربین</Paragraph>


                            </Dialog.Content>
                            <Divider/>
                            <Dialog.Actions style={{alignSelf: 'flex-start'}}>
                                {/*<TouchableOpacity onPress={this._hideDialog}>انصراف</TouchableOpacity>*/}
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                </PaperProvider>
                <PaperProvider>
                    <Portal>
                        <Dialog style={{zIndex: 99, position: 'relative', fontFamily: 'IRANSansMobile(FaNum)'}}
                                visible={this.state.visibleDialogCertificate}
                                onDismiss={this._hideDialogCertificate}>
                            <Dialog.Title style={{textAlign: 'right'}}>انتخاب تصویر</Dialog.Title>
                            <Dialog.Content style={{fontFamily: 'IRANSansMobile(FaNum)', color: 'red'}}>

                                <Paragraph style={{
                                    fontFamily: 'IRANSansMobile(FaNum)',
                                    color: 'red',
                                    textAlign: 'center',
                                    marginBottom: 10
                                }}
                                           onPress={() => {
                                               this.pickMultiplecertificate();
                                           }}
                                >گالری</Paragraph>

                                <Paragraph
                                    style={{fontFamily: 'IRANSansMobile(FaNum)', color: 'red', textAlign: 'center'}}
                                    onPress={() => {
                                        this.pickSingleWithCameracertificate();
                                    }}
                                >دوربین</Paragraph>
                                {/*<Text*/}
                                {/*    onPress={() => {*/}
                                {/*        this.pickSingleWithCamera();*/}
                                {/*    }}*/}
                                {/*>دوربین</Text>*/}


                            </Dialog.Content>
                            <Divider/>
                            <Dialog.Actions style={{alignSelf: 'flex-start'}}>
                                {/*<TouchableOpacity onPress={this._hideDialogCertificate}>انصراف</TouchableOpacity>*/}
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                </PaperProvider>
                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyleNext} onPress={() => this.props.navigation.push('Home')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)'}}> مرحله قبلی </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('stepFinal')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)'}}> مرحله بعدی
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
                <View style={{flex: 14, marginTop: hp('20%')}}>
                    {/*<View style={styles.responsiveBox}>*/}
                    <TextInput style={styles.inputs}
                               placeholder="نام کاربری "
                               keyboardType='numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                    {/*</View>*/}
                    {/*<View style={styles.responsiveBox}>*/}
                    <TextInput style={styles.inputs}
                               placeholder=" گذر واژه"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>

                </View>
                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('stepUploadFile')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile'}}> مرحله قبلی </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('Validatesms')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile'}}> ثبت نام
                        </Text></Button>

                    </View>
                </View>


            </View>
        );
    }
}

class ValidateSMS extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 120,
        }
        this.timer();
    }

    timer = () => {
        const theTime = setInterval(async () => {
            this.setState({timer: this.state.timer - 1});
            if (this.state.timer <= 0) {
                clearInterval(theTime);
            }
        }, 500);
    };

    _onFinishCheckingCode1(a) {
        if (a) {
            this.props.navigation.push('StepProductsCategorizationuser');
        } else
            Alert.alert(
                'تائیده کد ارسالی',
                'فروشنده محترم کد وارد شده اشتباه می باشد. مجدد تلاش کنید');
    }

    render() {
        return (

            <View style={{
                justifyContent: 'center',
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 10,
                marginTop: 10
            }}>
                <ScrollView>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        backgroundColor: '#de481e',
                        borderRadius: 10,
                    }}>
                        <FontAwesomeIcon icon={faSms} size={100} style={{color: '#fff', marginBottom: 10}}/>
                        {/*<Text style={{fontFamily:'IRANSansMobile(FaNum)',fontSize:18}}> زمان باقیمانده:{this.state.timer} </Text>*/}

                    </View>
                    <View style={
                        {
                            borderColor: '#33b5e5',
                            borderWidth: 1,
                            borderRadius: 10,
                            marginHorizontal: 10,
                            marginVertical: 20,
                            marginTop:20,
                        }}>
                        <View style={{flex: 1}}>
                            <Text style={{
                                fontSize: 15,
                                paddingVertical: 10,
                                fontFamily: 'IRANSansMobile',
                                backgroundColor: '#00C851',
                                color: '#fff',
                                textAlign: 'center',
                                borderRadius: 5
                            }}>
                                کد ارسال شده را وارد نمائید.
                            </Text>
                        </View>

                        <Divider style={{backgroundColor: '#33b5e5'}}/>
                        <View style={{height: 170, marginTop: 20, flexDirection: 'row',}}>
                            <View style={{
                                flex: 1,
                                borderRadius: 10,
                                // marginLeft: 10,
                                // marginRight: 4,
                                // borderWidth: 1,
                                borderColor: '#dddddd',
                                marginTop: 30,
                                width: 160,
                                height: 120,
                                // justifyContent: 'center', alignItems: 'center'
                            }}
                            >
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#777', textAlign: 'center'}}>کد
                                    پنج رقمی به شماره همراه 09166996165 ارسال شد.</Text>
                                <CodeInput
                                    ref="codeInputRef2"
                                    secureTextEntry
                                    compareWithCode='12345'
                                    activeColor='rgba(49, 180, 4, 1)'
                                    inactiveColor='rgba(49, 180, 4, 1.3)'
                                    autoFocus={false}
                                    ignoreCase={true}
                                    inputPosition='center'
                                    size={60}
                                    className='border-circle'
                                    onFulfill={(compareWithCode, code) => this._onFinishCheckingCode1(compareWithCode)}
                                    containerStyle={{marginTop: 30}}
                                    codeInputStyle={{borderWidth: 1.5, fontSize: 30}}
                                />

                            </View>


                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                        <ProgressCircle
                            percent={this.state.timer}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{fontSize: 18, fontFamily: 'IRANSansMobile(FaNum)'}}>{this.state.timer}</Text>
                        </ProgressCircle>
                        <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>
                            دس پز

                        </Text>
                    </View>
                </ScrollView>
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
        stepUploadFile: {
            screen: StepUploadFileUser, navigationOptions: ({navigation}) => ({
                // header: null,
                title: `مرحله دوم:آپلود تصویر کارت ملی و شناسنامه  `,
                headerStyle: {
                    backgroundColor: '#de481e',
                },
                headerTitleStyle: {
                    // alignSelf:'right',
                    // marginLeft: hp('1%'),
                    fontFamily: 'IRANSansMobile(FaNum)',
                    color: '#ffffff',
                    fontSize: 16
                },
            })
        },
        stepFinal: {
            screen: StepFinalUser, navigationOptions: ({navigation}) => ({
                // header: null,
                title: `مرحله سوم: مشخصات ورود به اپلیکیشن  `,
                headerStyle: {
                    backgroundColor: '#de481e',

                },
                headerTitleStyle: {
                    // alignSelf:'right',
                    // marginLeft: hp('10%'),
                    fontFamily: 'IRANSansMobile(FaNum)',
                    color: '#ffffff',
                    fontSize: 16
                },
            })
        },
        StepProductsCategorizationuser: {
            screen: StepProductsCategorization, navigationOptions: ({navigation}) => ({
                // header: null,
                title: `انتخاب دسته محصول `,
                headerStyle: {
                    backgroundColor: '#de481e',
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
        Validatesms: {
            screen: ValidateSMS, navigationOptions: ({navigation}) => ({
                // header: null,
                title: `تائیدیه کد ارسالی`,
                headerStyle: {
                    backgroundColor: '#de481e',
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
            width: "100%",
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 22,
            shadowColor: '#00000021',
            backgroundColor: '#fa1d7a',
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
export default createAppContainer(RootStack);
