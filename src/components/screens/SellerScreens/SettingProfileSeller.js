import React, {Component} from 'react';
import {ScrollView, Text, TextInput, View} from "react-native";
import {Avatar, Button, Card} from "react-native-paper";
import {Divider} from "react-native-elements";
import {faFileImage, faKey, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Switch} from 'react-native-paper';

class SettingProfileSeller extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                <View style={{flex: 2}}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'IRANSansMobile(FaNum)',
                        fontSize: 16,
                        backgroundColor: '#00C851',
                        color: '#fff'
                    }}>تنظیمات غیرقابل تغییر</Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#33b5e5',
                        marginHorizontal: 10,
                        borderRadius: 10,
                        marginTop: 5
                    }}>
                        <Text style={{textAlign: 'center', fontFamily: 'IRANSansMobile(FaNum)',}}>مشخصات کلی</Text>

                        <TextInput style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            textAlign: 'right',
                            borderRadius: 8,
                            borderColor: '#777',
                            borderWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 4,
                            fontSize: 14,
                        }}
                                   placeholder="رسول "
                                   keyboardType='numeric'
                                   editable={false}
                                   maxLength={10}
                                   underlineColorAndroid='transparent'/>
                        <TextInput style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            textAlign: 'right',
                            borderRadius: 8,
                            borderColor: '#777',
                            borderWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 4,
                            fontSize: 14,
                        }}
                                   placeholder="صیدی پیری"
                                   keyboardType='numeric'
                                   editable={false}
                                   maxLength={10}
                                   underlineColorAndroid='transparent'/>
                        <TextInput style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            textAlign: 'right',
                            borderRadius: 8,
                            borderColor: '#777',
                            borderWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 4,
                            fontSize: 14,
                        }}
                                   placeholder="4189900125"
                                   keyboardType='numeric'
                                   editable={false}
                                   maxLength={10}
                                   underlineColorAndroid='transparent'/>
                        <TextInput style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            textAlign: 'right',
                            borderRadius: 8,
                            borderColor: '#777',
                            borderWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 4,
                            fontSize: 14,
                        }}
                                   placeholder="لرستان-شهرستان الشتر"
                                   keyboardType='numeric'
                                   editable={false}
                                   maxLength={10}
                                   underlineColorAndroid='transparent'/>
                        <TextInput style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            textAlign: 'right',
                            borderRadius: 8,
                            borderColor: '#777',
                            borderWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 4,
                            fontSize: 14,
                        }}
                                   placeholder="06632551086"
                                   keyboardType='numeric'
                                   editable={false}
                                   maxLength={10}
                                   underlineColorAndroid='transparent'/>
                        <TextInput style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            textAlign: 'right',
                            borderRadius: 8,
                            borderColor: '#777',
                            borderWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 4,
                            fontSize: 14,
                        }}
                                   placeholder="ras.seidi65@gmail.com"
                                   keyboardType='numeric'
                                   editable={false}
                                   maxLength={10}
                                   underlineColorAndroid='transparent'/>


                    </View>
                </View>
                <View style={{flex: 1,marginTop:20}}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'IRANSansMobile(FaNum)',
                        fontSize: 16,
                        backgroundColor: '#00C851',
                        color: '#fff'
                    }}>تنظیمات تغییر پذیر</Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#33b5e5',
                        marginHorizontal: 10,
                        borderRadius: 10,
                        marginTop: 5
                    }}>
                        <View><Text style={{fontSize:15,color:'#777',  fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:10}}>رنگ پس زمینه:</Text></View>

                        <View style={{flexDirection:'row-reverse',marginTop:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,color:'#777',  fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:20}}>حالت شب:</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Switch
                                    value={true}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:'row-reverse',marginTop:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,color:'#777',  fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:10}}>تغییر گذر واژه:</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                               <FontAwesomeIcon icon={faKey} size={25} color='#777'/>
                            </View>
                        </View>
                        <View style={{marginTop:20,backgroundColor:'#ff4500',color:'#fff',borderRadius:10}}><Button >
                            <Text style={{fontSize:15,color:'#FFF',  fontFamily: 'IRANSansMobile(FaNum)',}}>    بروز رسانی</Text>
                        </Button></View>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default SettingProfileSeller;
