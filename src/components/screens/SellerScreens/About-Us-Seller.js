import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from "react-native";
import {List} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Icon} from "native-base";
import Divider from "react-native-material-ui/src/Divider";
class AboutUsSeller extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    source={require('../../../../assets/images/12.jpg')}
                    style={{width: '109%', height: '40%'}}
                    resizeMode="stretch"/>
                <ScrollView>

                    <View style={{flex: 1, fontFamily: 'IRANSansMobile(FaNum)', backgroundColor: '#fff'}}>
                        <Text style={{fontSize:16,fontFamily: 'IRANSansMobile(FaNum)', color: '#777', marginHorizontal: 10}}>
                            اپلیکیشن "دس پز" با امکانات متنوع در اختیار شما همراهان گرامی قرار گرفته است. در مسیر آماده سازی این اپلیکیشن سعی زیادی شده که از نظرات متنوع شما عزیزان، در کنار همراهی و مشاوره مستمر متخصصان امر آشپزی.
                            استفاده از خدمات این اپلیکیشن بدان معنی است که شرایط استفاده از آن را پذیرفته¬اید. باتوجه به
                            اینکه تمامی خدمات ارائه شده در مجموعه "دست پز" تابع قوانین مطروح در این بخش است. مطالعه آن
                            پیش از ثبت نام و استفاده از خدمات الزامی است.
                        </Text>
                    </View>
                    <View style={{flex: 1, fontFamily: 'IRANSansMobile(FaNum)', backgroundColor: '#fff',}}>
                        <Text style={{
                            fontFamily: 'IRANSansMobile(FaNum)',
                            fontSize: 16,
                            color: '#000',
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                            textAlign: 'right',
                            backgroundColor: '#e0e0e0'
                        }}>
                            راه های ارتباطی
                        </Text>
                        <List.Item
                            title="021-1234567"
                            description="(ساعت پاسخگویی پشتیبانی تلفنی از ساعت 9 الی 16)"
                            descriptionStyle={{color:'#ff4500',fontSize:13,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',}}

                            titleStyle={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',}}
                            right={props => <List.Icon {...props} icon="phone"/>}
                        />
                        <Divider/>
                        <List.Item
                            title="ارتباط با ما در تلگرام"
                            description="(ساعت پاسخگویی پشتیبانی تلگرامی از ساعت 9 الی 23)"
                            descriptionStyle={{color:'#ff4500' ,fontSize:13,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginRight:20,}}

                            titleStyle={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginRight:20}}
                            right={props => <Icon type="FontAwesome"  name="send-o"  style={{color:'#777',fontSize: 25,marginRight:10,marginTop:10}}/>}
                        />
                        <Divider/>
                        <List.Item
                            title="اینستا گرام"
                            titleStyle={{color:'#777',fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginRight:20}}
                            right={props => <Icon type="FontAwesome"  name="instagram"  style={{color:'#777',fontSize: 25,marginRight:10,marginTop:5}}/>}
                        />
                        <Divider/>
                        <List.Item
                            title="کانال تلگرام"

                            titleStyle={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginRight:20}}
                            right={props => <Icon type="FontAwesome"  name="send-o"  style={{color:'#777',fontSize: 25,marginRight:10}}/>}
                        />
                        <Divider/>
                        <List.Item
                            title="ایمیل: info@daspaz.com"
                            titleStyle={{color:'#777', fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginRight:20}}
                            right={props => <Icon type="FontAwesome"  name="envelope"  style={{color:'#777',fontSize: 25,marginRight:10,marginTop:5}}/>}
                        />
                        <Divider/>
                        <List.Item
                            title="وب سایت:http://daspaz.ir"
                            titleStyle={{color:'#777',fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginRight:20}}
                            right={props => <Icon type="FontAwesome"  name="globe"  style={{color:'#777',fontSize: 25,marginRight:10,marginTop:5}}/>}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AboutUsSeller;
