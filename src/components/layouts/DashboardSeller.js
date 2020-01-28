import {Image, View, Button, StyleSheet, ScrollView, Text, ImageBackground} from "react-native";
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faBalanceScale,
    faBars,
    faBell,
    faComment,
    faCreditCard,
    faEdit, faFunnelDollar,
    faHome, faMoneyBill, faPhone, faRubleSign, faSkiing, faTasks
} from "@fortawesome/free-solid-svg-icons";
import {Avatar} from 'react-native-paper';
import NotificationScreen from '../screens/SellerScreens/NotificationScreen';
import SefareshtScreen from '../screens/SefareshatScreen';
import HomeScreen from "../screens/SellerScreens/HomeScreen";
import RulesSeller from "../screens/SellerScreens/RulesSeller";
import React from "react";
import {Body, Footer, Header, Icon, Left, Right} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import Divider from "react-native-material-ui/src/Divider";

const Navigator = (NameScreen, TitleScreen) => createStackNavigator({
        Home: NameScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                title: TitleScreen,
                headerStyle: {
                    backgroundColor: '#de481e',
                    color: '#ffffff',
                    fontFamily: 'IRANSansMobile'

                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'IRANSansMobile',
                    color: '#ffffff',
                    fontSize: 16
                },
                headerRight: (

                    <FontAwesomeIcon icon={faBars} size={20} style={{color: '#ffffff', marginRight: 20}}
                                     onPress={() => navigation.openDrawer()}/>

                )
            }

        }
    });
const CustomDrawerComponent = props => (
    <View style={{flex: 1}}>
        <Header style={styles.container}>
            {/*<ImageBackground*/}
            {/*    source={require('../../../assets/images/HeaderSeller.jpg')}*/}
            {/*    style={{width: '100%', height: '100%'}}*/}
            {/*    resizeMode="stretch"></ImageBackground>*/}
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Avatar.Image size={75} source={require('../../../assets/images/HeaderSellerAwater.jpg')}/>
                </View>
                <View style={{flexDirection: 'row-reverse', flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Text style={{color: '#fff', fontFamily: 'IRANSansMobile',}}>پروفایل من</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{color: '#fff', fontFamily: 'IRANSansMobile',}}>خروج</Text>
                    </View>
                </View>
            </View>
            {/*<Image*/}
            {/*    source={require('../../../assets/images/logo1.png')}*/}
            {/*    style={styles.containerimage}*/}
            {/*/>*/}
        </Header>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>

        <Footer style={styles.containerfooter}>
            <View style={styles.containerview}>
                <TouchableOpacity>
                    <Icon type="FontAwesome" name="send-o" style={styles.containericon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="FontAwesome"
                        name="instagram"
                        style={styles.containericon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="FontAwesome"
                        name="globe"
                        style={styles.containericon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="FontAwesome"
                        name="twitter"
                        style={styles.containericon}
                    />
                </TouchableOpacity>
            </View>

        </Footer>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 150,
        // flex:1,
        // flexDirection:'row',
        backgroundColor: '#de481e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerimage: {
        borderRadius: 75,
        width: 120,
        height: 120,
        marginTop: 15,
    },
    containericon: {
        color: '#ffff',
        fontSize: 30,
    },
    containerview1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: -10,
        flexDirection: 'row',
    },
    containerview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    containerfooter: {
        backgroundColor: '#de481e',
        borderTopWidth: 1,
        // height:100,
        borderTopColor: '#de481e',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    containertext: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#ffff',
    },
    icon: {
        width: 24,
        height: 24,
    },
});

const MyDrawerNavigator = createDrawerNavigator({
        'صفحه اصلی': {
            screen: Navigator(HomeScreen, 'صفحه اصلی'),

            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>صفحه اصلی </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faHome} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'پیام ها/اعلان ها': {
            screen: Navigator(NotificationScreen, 'پیام ها/اعلان ها '),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>پیام ها/اعلان ها </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faBell} style={{color: '#777777'}} size={20}/>
                        </View>
                    </View>
                ),


            }
        },
        'سفارشات مشتري': {
            screen: Navigator(SefareshtScreen, 'سفارشات مشتري '),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>سفارشات مشتري </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faEdit} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },
        'سفارشات در حال آماده سازي': {
            screen: Navigator(HomeScreen, 'سفارشات در حال آماده سازي'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>سفارشات در حال آماده سازي </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon
                                type="FontAwesome"
                                name="cutlery"

                                style={{fontSize: 20, color: '#777777'}}
                            />
                        </View>
                    </View>
                ),


            }
        },
        'درآمدها': {
            screen: Navigator(HomeScreen, 'درآمدها'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>درآمدها </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faCreditCard} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },
        'ثبت توانايي ها': {
            screen: Navigator(HomeScreen, 'ثبت توانايي ها'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>ثبت توانايي ها </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faTasks} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },
        'قوانين موجود': {
            screen: Navigator(RulesSeller, 'راهنما و قوانین اپلیکیشن'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>راهنما و قوانین اپلیکیشن</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faBalanceScale} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },
        'تماس با ما': {
            screen: Navigator(HomeScreen, 'تماس با ما'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>تماس با ما </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faPhone} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },

    },
    {
        drawerPosition: 'right',
        drawerWidth: 250,
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            // activeTintColor: '#fff',
            // inactiveTintColor: '#777777',
            // activeBackgroundColor: '#F06',
            inactiveBackgroundColor: '#ffff',
            itemsContainerStyle: {
                // marginHorizontal: 8,
                border: 10,
            },
            labelStyle: {
                fontSize: 15,
                fontFamily: 'IRANSansMobile',
            },
            itemStyle: {
                height: 60,
                justifyContent: 'center',

            },

        },
    });

export default createAppContainer(MyDrawerNavigator);