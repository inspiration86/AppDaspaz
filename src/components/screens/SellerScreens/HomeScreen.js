import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image, TouchableOpacity,
    Dimensions, FlatList
} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Divider} from 'react-native-elements';
import {faClock, faHeart, faHeartbeat, faPlusCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Avatar, Card} from "react-native-paper";
import Footer from '../../../components/layouts/Footer';

const {height, width} = Dimensions.get('window');

class Explore extends Component {
    constructor(props) {
        super(props);

        this.state = {

            data: [
                // dataSource: ds.cloneWithRows([
                {
                    FirstName: 'رسول صیدی',
                    description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
                    image: './assets/images/1.jpg',
                    date: '2بهمن'
                }
                ,
                {
                    FirstName: 'فرهادی ',
                    description: "واریز با موفقیت انجام شد",
                    image: './assets/images/1.jpg',
                    date: '18 دی'

                }
                ,
                {
                    FirstName: 'زهرا راد ',
                    description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
                    image: './assets/images/1.jpg',
                    date: '18 آذر'

                }
                ,
                {
                    FirstName: ' الهام گودرزی',
                    description: "فروشنده محترم،سفارش تحویل گردید",
                    image: './assets/images/1.jpg',
                    date: '21 دی'

                }
                ,
                {
                    FirstName: 'سمیرا احمدی ',
                    description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
                    image: './assets/images/1.jpg',
                    date: '21 دی'

                }
                ,
                {
                    FirstName: 'محمد یاری ',
                    description: "واریز با موفقیت انجام شد",
                    image: './assets/images/1.jpg',
                    date: '21 بهمن'

                }
                ,
                {
                    FirstName: 'علی عباسی ',
                    description: "فروشنده محترم،سفارش تحویل گردید",
                    image: './assets/images/1.jpg',
                    date: '21 شهریور'

                }
                ,
                {
                    FirstName: 'خسرو امیری ',
                    description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
                    image: './assets/images/1.jpg',
                    date: '9 دی'

                }
                ,
                {
                    FirstName: 'باران صیدی ',
                    description: "واریز با موفقیت انجام شد",
                    image: './assets/images/1.jpg',
                    date: '12 دی'

                },
                {
                    FirstName: 'ثنا علوانی ',
                    description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
                    image: './assets/images/1.jpg',
                    date: '12 دی'

                },
                {
                    FirstName: 'ثریا احمدی ',
                    description: "فروشنده محترم،سفارش تحویل گردید",
                    image: './assets/images/1.jpg',
                    date: '12 دی'

                },
                {
                    FirstName: 'سمیرا احمدی ',
                    description: "واریز با موفقیت انجام شد",
                    image: './assets/images/1.jpg',
                    date: '12 دی'

                }
            ],

        };
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}>
                <View >

                    <ScrollView style={{backgroundColor:'#fff'}}

                    >

                        <View style={{flex: 1, backgroundColor: 'white',marginTop:30}}>
                            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                <View style={{flex: 2}}>
                                    <Text style={{
                                        fontSize: 15,
                                        paddingVertical: 5,
                                        paddingHorizontal: 10,
                                        fontFamily: 'IRANSansMobile',
                                        backgroundColor: '#00C851',
                                        color: '#fff',
                                        textAlign: 'right',
                                        borderRadius:20
                                    }}>
                                        سفارش های در حال  آماده سازی
                                    </Text>

                                </View>
                                <View >
                                    <Text style={{
                                        fontSize: 15,
                                        paddingVertical: 5,
                                        paddingHorizontal: 25,
                                        // marginLeft:10,
                                        fontFamily: 'IRANSansMobile',
                                        backgroundColor: '#00C851',
                                        color: '#fff',
                                        textAlign: 'right',
                                        borderRadius:20
                                    }} onPress={this.props.navigation.push('OrderNewCustomer')}>همه
                                    </Text>
                                </View>
                            </View>
                            <View style={{height: 240, marginTop: 30, paddingHorizontal: 8}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <View style={{
                                        height: 210,
                                        width: 190,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 2
                                    }}>
                                        <View style={{flex: 3,}}>

                                            <Image source={require('../../../../assets/images/6.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            marginBottom: 5

                                        }}>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    fontFamily: 'IRANSansMobile(FaNum)',
                                                    fontSize: 12,
                                                    color: '#777777'
                                                }}>
                                                شکلات</Text>
                                            <Text
                                                style={{
                                                    color: '#de481e',
                                                    textAlign: 'left',
                                                    fontFamily: 'IRANSansMobile(FaNum)',
                                                    fontSize: 12,
                                                }}>
                                                20 بهمن</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 210,
                                        width: 190,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 2
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <Image source={require('../../../../assets/images/7.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />

                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            marginBottom: 5

                                        }}>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    fontFamily: 'IRANSansMobile(FaNum)',
                                                    fontSize: 12,
                                                    color: '#777777'
                                                }}>
                                                دسر</Text>
                                            <Text
                                                style={{
                                                    color: '#de481e',
                                                    textAlign: 'left',
                                                    fontFamily: 'IRANSansMobile(FaNum)',
                                                    fontSize: 12,
                                                }}>
                                                11 اسفند</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 210,
                                        width: 190,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <Image source={require('../../../../assets/images/3.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',


                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#777777'}}>
                                                محصولات محلی</Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>

                        </View>
                        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20,}}>
                            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                <View style={{flex: 2}}>
                                    <Text style={{
                                        fontSize: 15,
                                        paddingVertical: 5,
                                        paddingHorizontal: 10,
                                        fontFamily: 'IRANSansMobile',
                                        backgroundColor: '#00C851',
                                        color: '#fff',
                                        textAlign: 'right',
                                        borderRadius:20
                                    }}>
                                      لیست محصولات
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: 15,
                                        paddingVertical: 5,
                                        paddingHorizontal: 25,
                                        // marginLeft:10,
                                        fontFamily: 'IRANSansMobile',
                                        backgroundColor: '#00C851',
                                        color: '#fff',
                                        textAlign: 'right',
                                        borderRadius:20
                                    }}>همه
                                    </Text>
                                </View>
                            </View>


                            <View style={{height: 240, marginTop: 30}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        height: 200,
                                        width: 170,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <FontAwesomeIcon icon={faHeart} size={32} style={{
                                                color: 'rgba(239,255,223,0.81)',
                                                zIndex: 99,
                                                marginTop: 10,
                                                marginLeft: 10,
                                                position: 'absolute'
                                            }}/>

                                            <Image source={require('../../../../assets/images/1.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#ffbb33',
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,


                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                شیرینی</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 200,
                                        width: 170,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <FontAwesomeIcon icon={faHeart} size={32} style={{
                                                color: 'rgba(239,255,223,0.81)',
                                                zIndex: 99,
                                                marginTop: 10,
                                                marginLeft: 10,
                                                position: 'absolute'
                                            }}/>

                                            <Image source={require('../../../../assets/images/2.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#ffbb33',
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,

                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                شکلات</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 200,
                                        width: 170,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <FontAwesomeIcon icon={faHeart} size={32} style={{
                                                color: 'rgba(239,255,223,0.81)',
                                                zIndex: 99,
                                                marginTop: 10,
                                                marginLeft: 10,
                                                position: 'absolute'
                                            }}/>

                                            <Image source={require('../../../../assets/images/3.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#ffbb33',
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,

                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                دسر</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 200,
                                        width: 170,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <Image source={require('../../../../assets/images/3.jpg')}
                                                   style={{
                                                       flex: 1,
                                                       borderRadius: 10,
                                                       marginLeft: 4,
                                                       marginRight: 4,
                                                       marginTop: 4,
                                                       width: null,
                                                       height: null,
                                                       resizeMode: 'cover'
                                                   }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            paddingLeft: 10,
                                            paddingTop: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#ffbb33',
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,

                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                محصولات محلی</Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>

                        </View>


                    </ScrollView>
                </View>
{/*<Footer/>*/}

            </SafeAreaView>

        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
