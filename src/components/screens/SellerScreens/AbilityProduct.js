import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    FlatList,
    PixelRatio,
    Alert,
    ScrollView, TouchableHighlight
} from 'react-native';
import {Avatar, Card, Switch} from 'react-native-paper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

class ProductsCategorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: false,
            isSwitchOn1: true,
            isSwitchOn2: false,
            isSwitchOn3: true,
            modalVisible:false,
            userSelected:[],
            data: [
                {
                    id: 1,
                    name: "شیرینی",
                    sub_Product: "خشک،تر،لیمویی و ...",
                    image: "https://kalleh.com/book/wp-content/uploads/sites/2/2018/02/D985D8A7DAA9D8A7D8B1D988D986.jpg",
                    isSwitchOn: false
                },
                {
                    id: 2,
                    name: "حلوا",
                    sub_Product: "ساده،مجلسی،زنجبیلی و ...",
                    image: "../../../assets/images/1.jpg",
                    isSwitchOn: true
                },
                {
                    id: 3,
                    name: "دسر",
                    sub_Product: "لیمو،نارگیل،یاقوتی و ...",
                    image: "https://www.mamanpaz.ir/files/image/food/19/12/2017/64018a1d-9352-427b-941f-e24883861422.jpg",
                    isSwitchOn: false
                },
                {
                    id: 4,
                    name: "شکلات",
                    sub_Product: "سیاه،شیری،تخته ای و ...",
                    image: "https://kalleh.com/book/wp-content/uploads/sites/2/2018/09/kabede-charb-va-shokolat-talkh1.jpg",
                    isSwitchOn: true
                },
                {
                    id: 5,
                    name: " کیک",
                    sub_Product: "پرتقالی،عسلی،کنجدی و ...",
                    image: "https://kalleh.com/book/wp-content/uploads/sites/2/2020/01/طرز-تهیه-کیک-وگان-شکلاتی.jpg",
                    isSwitchOn: false
                },
                {
                    id: 6,
                    name: "محصولات محلی",
                    sub_Product: "لواشک،رب گوجه،ترخینه و ...",
                    image: "https://kalleh.com/book/wp-content/uploads/sites/2/2019/05/ash-shooli.jpg",
                    isSwitchOn: false
                },
                {
                    id: 7,
                    name: " نان",
                    sub_Product: "تنوری،فانتزی،بربری و ...",
                    image: "https://kalleh.com/book/wp-content/uploads/sites/2/2019/12/nan-zanjebili01.jpg",
                    isSwitchOn: true
                },

            ]
        };
    }
    clickEventListener = (item) => {
        Alert.alert('Message', 'Item clicked. '+item.name);
    }
    render() {
        const { isSwitchOn } = this.state;
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:'rgba(210,210,210,0.35)',justifyContent:'center',}}>
                    <Text style={styles.title}>
                        فروشنده محترم، در کدام یک از دسته های زیر توانایی تامین و تهیه محصول را دارید. هر کدام از دسته های زیر جزء توانایی های شماست آنرا انتخاب کنید.
                    </Text>
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
                                <Card style={{borderWidth:1,borderColor:'rgba(0,190,249,0.1)',marginBottom:20,marginHorizontal:10}}>
                                    <Card.Title
                                        title={item.name}
                                        titleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15}}
                                        subtitle={item.sub_Product}
                                        subtitleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15}}

                                        right={(data) => <Avatar.Image size={70} source={item.image} />}
                                        left={(props) =>  <Switch style={styles.followButton}
                                                            value={item.isSwitchOn}
                                                            onValueChange={() => {
                                                                this.setState({isSwitchOn: !isSwitchOn});
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
                    <Button titleStyle={{fontFamily: 'IRANSansMobile(FaNum)'}} style={{ fontFamily: 'IRANSansMobile(FaNum)',}} title="ثبت توانایی" color='#FF4500'/>

                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create(
    {
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


        loginText: {
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 16,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
        },
        containerBottom: {
            backgroundColor: '#00bfa5',
            fontFamily: 'IRANSansMobile(FaNum)',
            color:'#fff'
        },
        buttonContainer: {
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

        title: {
            marginRight: hp('1%'),
            marginLeft: 40,
            fontFamily: 'IRANSansMobile(FaNum)',
            // justifyContent: 'center',
            // alignItems: 'center',
            textAlign:'center',
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
            height: hp('11%'),
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
export default ProductsCategorization;
