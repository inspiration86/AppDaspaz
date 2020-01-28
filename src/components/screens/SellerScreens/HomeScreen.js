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
    Image,TouchableOpacity,
    Dimensions
} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Divider} from 'react-native-elements';
import {faClock, faHeart, faHeartbeat, faPlusCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Container} from "native-base";

const {height, width} = Dimensions.get('window')

class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>

                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{flex: 1, backgroundColor: 'white'}}>
                            <Text style={{
                                fontSize: 15,
                                paddingVertical:10,
                                marginRight:2,
                                marginLeft:2,
                                fontFamily: 'IRANSansMobile',
                                backgroundColor: '#ff',
                                color: '#777',
                                textAlign: 'center',
                                // borderRadius:20
                            }}>
                                سفارش های جدید
                            </Text>

                            <View style={{height: 160, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <Image source={require('../../../../assets/images/5.jpg')}
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                شیرینی</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                3 آذر</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                شکلات</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                20 بهمن</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                دسر</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                11 اسفند</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
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
                                                محصولات  محلی</Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>

                        </View>
                        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{
                                fontSize: 15,
                                paddingVertical:10,
                                marginRight:8,
                                marginLeft:8,
                                fontFamily: 'IRANSansMobile',
                                backgroundColor: '#FFF',
                                color: '#777',
                                textAlign: 'center',
                                // borderRadius:20
                            }}>
                                لیست محصولات
                            </Text>

                            <View style={{height: 160, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <FontAwesomeIcon icon={faHeart} size={32} style={{color:'rgba(239,255,223,0.81)',zIndex:99,marginTop:10,marginLeft:10,position:'absolute'}}/>

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
                                            backgroundColor:'#de481e',
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,


                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                شیرینی</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <FontAwesomeIcon icon={faHeart} size={32} style={{color:'rgba(239,255,223,0.81)',zIndex:99,marginTop:10,marginLeft:10,position:'absolute'}}/>

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
                                            backgroundColor:'#de481e',
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,

                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                شکلات</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
                                            <FontAwesomeIcon icon={faHeart} size={32} style={{color:'rgba(239,255,223,0.81)',zIndex:99,marginTop:10,marginLeft:10,position:'absolute'}}/>

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
                                            backgroundColor:'#de481e',
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,

                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                دسر</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
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
                                            backgroundColor:'#de481e',
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,

                                        }}>
                                            <Text
                                                style={{fontFamily: 'IRANSansMobile', fontSize: 12, color: '#fff'}}>
                                                محصولات  محلی</Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>

                        </View>
                        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{
                                fontSize: 15,
                                paddingVertical:10,
                                marginRight:8,
                                marginLeft:8,
                                fontFamily: 'IRANSansMobile',
                                backgroundColor: '#fff',
                                color: '#777',
                                textAlign: 'center',
                                // borderRadius:20
                            }}>
                                سفارش های در حال آماده سازی
                            </Text>

                            <View style={{height: 160, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                شکلات</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                <FontAwesomeIcon icon={faClock} style={{color:'#de481e'}}/> 1 روز مانده
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#dddddd',
                                        borderRadius: 10
                                    }}>
                                        <View style={{flex: 3,}}>
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                شکلات</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                <FontAwesomeIcon icon={faClock} style={{color:'#de481e'}}/> 2 روز مانده
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                شکلات</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                <FontAwesomeIcon icon={faClock} style={{color:'#de481e'}}/> 2 روز مانده
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 160,
                                        width: 130,
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
                                            marginBottom:5

                                        }}>
                                            <Text
                                                style={{textAlign: 'center',fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, color: '#777777'}}>
                                                شکلات</Text>
                                            <Text
                                                style={{color:'#de481e', textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12,}}>
                                                <FontAwesomeIcon icon={faClock} style={{color:'#de481e'}}/> 5 روز مانده
                                            </Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#de481e'}}>

                        <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                            <View style={{flex:2,justifyContent:'center',alignItems:'flex-end'}}>
                                <Text style={{color:'white',fontFamily: 'IRANSansMobile'}}>  ثبت محصول جدید</Text>

                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                                <FontAwesomeIcon icon={faPlusCircle} size={25} style={{color:'white'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
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