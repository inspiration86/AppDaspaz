import * as React from 'react';
import {
    Image,
    StyleSheet,
    PixelRatio,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Picker,
    ScrollView, NativeModules, TouchableHighlight, Alert, RefreshControl
} from 'react-native';
import Select2 from "react-native-select-two";

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faBars,
    faCamera, faCocktail, faCookie, faFileImage, faIceCream, faList, faListAlt,
    faPizzaSlice,
    faPlusCircle,
    faTimes, faTimesCircle,

} from "@fortawesome/free-solid-svg-icons";
import {Avatar, Divider, Button, Card, Title, Paragraph, Dialog, Portal, RadioButton} from 'react-native-paper';

import {Provider as PaperProvider} from 'react-native-paper';
import Modal, { ModalContent,SlideAnimation } from 'react-native-modals';
var ImagePicker = NativeModules.ImageCropPicker;
const ListProduct = [
    {id: 1, name: "شیرینی",}, // set default checked for render option item
    {id: 2, name: "دسر", checked: false},
    {id: 3, name: "حلوا", checked: false},
    {id: 4, name: "شکلات", checked: false},
    {id: 5, name: "کیک", checked: false},
    {id: 6, name: "محصولات محلی", checked: false},
    {id: 7, name: "نان", checked: false},

]
const ListKilo = [
    {id: 1, name: "1 کیلو",}, // set default checked for render option item
    {id: 2, name: "2 کیلو", checked: false},
    {id: 3, name: "3 کیلو", checked: false},
    {id: 4, name: "4 کیلو", checked: false},
    {id: 5, name: "5 کیلو", checked: false},
    {id: 6, name: "6 کیلو", checked: false},
    {id: 7, name: "7 کیلو", checked: false},

]

const renderImage = (image) => {

    return [
        <>
            <Image style={{
                flex: 4,
                borderRadius: 10,
                marginLeft: 4,
                marginRight: 4,
                marginTop: 4,
                width: 160,
                height: 160,
                resizeMode: 'cover'
            }} source={image}/>
        </>
    ]
}
export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            ProductType: '',
            mobile: '',
            password: '',
            ImageSource: null,
            ImageSourceNationalCard: null,
            path: null,
            image: null,
            images: [],
            modalVisible: false,
            visible: false,
            showDialogTypeProduct: false,
            userSelected: [],
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
    updateStateProductType(type) {
        this.setState({ProductType: type});
        this._hideDialogTypeProduct();
    }

    _showDialogTypeProduct = () => this.setState({showDialogTypeProduct: true});

    _hideDialogTypeProduct = () => this.setState({showDialogTypeProduct: false});
    _showDialog = () => this.setState({visible: true});

    _hideDialog = () => this.setState({visible: false});

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

    render() {
        return (
            <View style={{flex: 1, marginTop: 10}}>
                <ScrollView>
                    <View style={{flex: 2,}}>
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            <View style={{flex: 13,marginHorizontal:10}}>
                                <Select2

                                    isSelectSingle
                                    style={{
                                        borderRadius: 10, paddingVertical: 10, marginVertical: 10, borderColor: '#33b5e5',
                                        borderWidth: 1,
                                    }}
                                    colorTheme="red"
                                    popupTitle="انتخاب نوع محصول"
                                    title="نوع محصول مورد نظر خود را وارد نمائید"
                                    searchPlaceHolderText="جستجو"
                                    cancelButtonText="انصراف"
                                    selectButtonText="انتخاب"
                                    buttonTextStyle="IRANSansMobile(FaNum)"
                                    buttonStyle="IRANSansMobile(FaNum)"
                                    defaultFontName="IRANSansMobile(FaNum)"
                                    data={ListProduct}
                                    onSelect={
                                        // alert('ddd')
                                        data => {
                                            this.setState({data})
                                            // this.onCityChange(data)
                                            // this.onCityChange(data[0])
                                        }
                                    }


                                    onRemoveItem={data => {
                                        this.setState({data})
                                    }
                                    }
                                />
                            </View>
                        </View>
                        <TextInput
                            style={{
                                fontFamily: 'IRANSansMobile(FaNum)',
                                textAlign: 'right',
                                borderRadius: 8,
                                borderColor: '#0099CC',
                                borderWidth: 1,
                                marginHorizontal: 8,
                                marginVertical: 4
                            }}
                            placeholder='نام محصول '
                            autoCapitalize="none"
                            placeholderTextColor='#777'

                        />
                        <TextInput
                            style={{
                                fontFamily: 'IRANSansMobile(FaNum)',
                                textAlign: 'right',
                                borderRadius: 8,
                                height: 100,
                                borderColor: '#0099CC',
                                borderWidth: 1,
                                marginHorizontal: 10,
                                marginVertical: 4,
                                textAlignVertical: 'top'
                            }}
                            placeholder=' مواد مصرف شده'
                            autoCapitalize="none"
                            placeholderTextColor='#777'
                            multiline={true}
                        />


                        <TextInput
                            style={{
                                fontFamily: 'IRANSansMobile(FaNum)',
                                textAlign: 'right',
                                borderRadius: 8,
                                borderColor: '#0099CC',
                                borderWidth: 1,
                                marginHorizontal: 8,
                                marginVertical: 4
                            }}
                            placeholder=' قیمت (هر کیلو)'
                            autoCapitalize="none"
                            keyboardType='numeric'
                            placeholderTextColor='#777'
                        />
                        <View style={{flex: 13,marginHorizontal:10}}>
                        <Select2

                            isSelectSingle
                            style={{
                                borderRadius: 10, paddingVertical: 10, marginVertical: 10, borderColor: '#33b5e5',
                                borderWidth: 1,
                            }}
                            colorTheme="red"
                            popupTitle="انتخاب حجم محصول"
                            title="حجم محصول مورد نظر خود را وارد نمائید"
                            searchPlaceHolderText="جستجو"
                            cancelButtonText="انصراف"
                            selectButtonText="انتخاب"
                            buttonTextStyle="IRANSansMobile(FaNum)"
                            buttonStyle="IRANSansMobile(FaNum)"
                            defaultFontName="IRANSansMobile(FaNum)"
                            data={ListKilo}
                            onSelect={
                                // alert('ddd')
                                data => {
                                    this.setState({data})
                                    // this.onCityChange(data)
                                    // this.onCityChange(data[0])
                                }
                            }


                            onRemoveItem={data => {
                                this.setState({data})
                            }
                            }
                        />
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{
                            fontSize: 15,
                            paddingVertical: 10,
                            marginRight: 10,
                            marginLeft: 2,
                            fontFamily: 'IRANSansMobile',
                            backgroundColor: '#ff',
                            color: '#777',
                            textAlign: 'right',
                            // borderRadius:20
                        }}>
                            تصویر محصول
                        </Text>
                    </View>
                    <View style={{height: 180, marginTop: 20, flex: 13, flexDirection: 'row'}}>
                        <View style={{

                            flex: 4,
                            borderRadius: 10,
                            marginLeft: 10,
                            marginRight: 4,
                            borderWidth: 1,
                            borderStyle: 'dashed',
                            borderColor: '#33b5e5',
                            marginTop: 20,
                            width: 160,
                            height: 130,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        >
                            <View style={{flex: 1}}>
                                <FontAwesomeIcon icon={faFileImage} size={60} style={{marginTop: 4,color:'#00C851'}}
                                                 onPress={this._showDialog}

                                />
                            </View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontFamily: 'IRANSansMobile(FaNum)',
                                    fontSize: 14,
                                    color: '#777777'
                                }}>
                                افزودن تصویر محصول</Text>
                        </View>
                        <View style={{height: 170, marginTop: 20, flex: 9}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh}
                                    />
                                }>
                                {/*{this.state.image ? this.renderAsset(this.state.image) : null}*/}

                                {this.state.images ? this.state.images.map(i =>
                                    <View
                                        key={i.uri}>{this.renderAsset(i)}

                                        <FontAwesomeIcon icon={faTimesCircle} size={25} style={{
                                            color: 'red',
                                            marginTop: 4,
                                            zIndex: 9999,
                                            position: 'absolute',
                                            alignSelf: 'flex-end'
                                        }} onPress={() => this.cleanupSingleImage(i)}/>



                                    </View>
                                ) : null
                                }
                            </ScrollView>
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
                                <View>

                                    <Button style={{fontFamily: 'IRANSansMobile(FaNum)', color: 'red'}}
                                            onPress={() => {
                                                this.pickMultiple();
                                            }}
                                    >گالری</Button>
                                </View>
                                <View>
                                    <Button
                                        onPress={() => {
                                            this.pickSingleWithCamera();
                                        }}
                                    >دوربین</Button>
                                </View>


                            </Dialog.Content>
                            <Divider/>
                            <Dialog.Actions style={{alignSelf: 'flex-start'}}>
                                <Button onPress={this._hideDialog}>انصراف</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                </PaperProvider>
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff4500'}}>

                    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}
                    >
                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text style={{color: 'white', fontFamily: 'IRANSansMobile'}}> ثبت محصول </Text>

                        </View>

                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    ImageContainer: {
        borderRadius: 10,
        width: 300,
        height: 200,
        borderColor: '#909898',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'IRANSansMobile(FaNum)',
        backgroundColor: '#777777',
        marginBottom: 10
    },
    textImage: {
        fontFamily: 'IRANSansMobile(FaNum)',
        color: '#ffffff',
        fontSize: 16
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 300,
        width: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,

    },
    text: {
        color: '#3f2949',
        marginTop: 10
    },
    // /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 50
    },
    popupContent: {
        alignItems: 'center',
        marginTop: 20,
        height: 250,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 20,
        backgroundColor: '#20b2aa',
        padding: 20
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
