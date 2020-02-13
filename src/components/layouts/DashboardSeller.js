import {Image, View, Button, StyleSheet, ScrollView, Text, ImageBackground} from "react-native";
import {createDrawerNavigator, DrawerItems,DrawerActions} from 'react-navigation-drawer';
import {createAppContainer,} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faBalanceScale,
    faBars,
    faBell,
    faComment,
    faCreditCard,
    faEdit,
    faFunnelDollar,
    faHome,
    faLayerGroup,
    faListAlt,
    faMoneyBill,
    faPhone,
    faPlusCircle,
    faRubleSign,
    faSign,
    faSignOutAlt,
    faSkiing,
    faTasks,
    faUser, faUsers
} from "@fortawesome/free-solid-svg-icons";
import {Avatar} from 'react-native-paper';
import NotificationScreen from '../screens/SellerScreens/NotificationScreen';
import OrderCustomer from '../screens/SellerScreens/OrderCustomer';
import OrderPreparationCustomer from '../screens/SellerScreens/OrderPreparationCustomer';
import AbilityProduct from '../screens/SellerScreens/AbilityProduct';
import OrderNewCustomer from '../screens/SellerScreens/OrderNewCustomer';
import SettingProfileSeller from "../screens/SellerScreens/SettingProfileSeller";
import HomeScreen from "../screens/SellerScreens/HomeScreen";
import RegisterProducts from "../screens/SellerScreens/RegisterProducts";
import RulesSeller from "../screens/SellerScreens/RulesSeller";
import AboutUsSeller from "../screens/SellerScreens/About-Us-Seller";
import React from "react";
import {Body, Footer, Header, Icon, Left, Right} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import Divider from "react-native-material-ui/src/Divider";
import B from './BottomTabNavigator';
import {createBottomTabNavigator } from "react-navigation-tabs";
import Badge from "react-native-material-ui/src/Badge";
import {transparent} from "react-native-material-ui/src/styles/colors";
// import {Ionicons} from 'react-native-ionicons';
const Navigator = (NameScreen, TitleScreen) => createStackNavigator({
        Home: NameScreen,

    },

    {
        defaultNavigationOptions: ({navigation}) => {
            return {

                title: TitleScreen,
                headerStyle: {
                    backgroundColor: '#ff4500',
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
                                     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>

                ),
            }


        }
    });
const CustomDrawerComponent = props => (
    <View style={{flex: 1}}>
        <Header style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/HeaderSeller.jpg')}
                style={{width: '109%', height: '100%'}}
                resizeMode="stretch">
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-end', marginTop: 10,marginLeft:30}}>
                    <Avatar.Image size={75} style={{marginRight:100}} source={require('../../../assets/images/logo12.png')}/>
                </View>
                {/*<View style={{flexDirection: 'row-reverse', flex: 1,backgroundColor:'#777',paddingHorizontal:10}}>*/}
                {/*    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>*/}
                {/*        <Text style={{color: '#fff', fontFamily: 'IRANSansMobile',}} onPress={()=>alert('ss')}>پروفایل من</Text>*/}
                {/*    </View>*/}
                {/*    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>*/}
                {/*        <Text style={{color: '#fff', fontFamily: 'IRANSansMobile',}}>خروج</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
            </View>
            </ImageBackground>

        </Header>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>

        <Footer style={styles.containerfooter}>
            {/*<View style={styles.containerview}>*/}
            {/*    <TouchableOpacity>*/}
            {/*        <Text style={{fontSize:16,color:'#777',fontFamily: 'IRANSansMobile(FaNum)',marginRight:20}}>*/}
            {/*             <FontAwesomeIcon icon={faSignOutAlt} style={styles.containericon}/>خروج</Text>*/}
            {/*    </TouchableOpacity>*/}

            {/*</View>*/}
            <View style={{flexDirection: 'row-reverse', flex: 1,backgroundColor:'#eeeeee',paddingHorizontal:10}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end',marginHorizontal:20}}>
                    <Text> <FontAwesomeIcon icon={faSignOutAlt} style={styles.containericon}/></Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{color: '#777', fontFamily: 'IRANSansMobile',}}>خروج</Text>
                </View>
            </View>
        </Footer>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 180,
        // flex:1,
        // flexDirection:'row',
        backgroundColor: 'transparent',
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
        color: '#777',
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
        backgroundColor: '#eeeeee',
        borderTopWidth: 1,
        // height:100,
        borderTopColor: '#eeeeee',
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
        'پروفایل من': {
            screen: Navigator(SettingProfileSeller, 'پروفایل من '),

            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>پروفایل من  </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faUser} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },

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
            screen: Navigator(OrderCustomer, 'سفارشات مشتري '),
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
        'لیست محصولات': {
            screen: Navigator(AbilityProduct, 'لیست محصولات'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>لیست محصولات </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faListAlt} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },
        'سفارشات در حال آماده سازي': {
            screen: Navigator(OrderPreparationCustomer, 'سفارشات در حال آماده سازي'),
            navigationOptions: {
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row',}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777',}}>سفارشات در حال آماده سازي </Text>
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
            screen: Navigator(AbilityProduct, 'ثبت توانايي ها'),
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
        'درباره ما': {
            screen: Navigator(AboutUsSeller, 'درباره ما'),
            navigationOptions: {

                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#777777'}}>درباره ما </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faUsers} size={20} style={{color: '#777777'}}/>
                        </View>
                    </View>
                ),


            }
        },


    },
    {
        drawerPosition: 'right',
        drawerWidth: 250,
        initialRouteName:  'صفحه اصلی',
        contentComponent: CustomDrawerComponent,
        contentOptions: {

            // activeTintColor: 'red',
            inactiveTintColor: '#fff',
            activeBackgroundColor: '#e0e0e0',
            // inactiveBackgroundColor: '#ffff',

            itemsContainerStyle: {
               backgroundColor:'#fff',
                border: 10,
            },
            labelStyle: {
                fontSize: 15,
                fontFamily: 'IRANSansMobile(FaNum)',
            },
            itemStyle: {
                height: 60,
                justifyContent: 'center',

            },

        },

    });
const AppTabNavigator = createBottomTabNavigator({
        OrderNew: {screen: Navigator(OrderNewCustomer, 'سفارش های جدید'),
    navigationOptions: {
        title: 'سفارش های جدید',

        tabBarIcon: ({ tintColor,focused  }) => (

            <Icon
                type="FontAwesome"
                name="cutlery"
                style={{fontSize: 30,color:tintColor,}}
            />
        )
    },
      },
        ProductNew: {screen: Navigator(RegisterProducts, 'افزودن محصول'),
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({ tintColor,focused  }) => (
                    <FontAwesomeIcon icon={faPlusCircle} size={60} color={tintColor} style={{marginTop:30}} />
                )
            }},
        Home:{screen: MyDrawerNavigator, navigationOptions: {
                title: 'صفحه اصلی',
                tabBarIcon: ({ tintColor,focused  }) => (
                    <FontAwesomeIcon icon={faHome} color={tintColor} size={30}/>
                )
            }},

},
    {
        tabBarOptions: {
            showIcon: true,

            activeTintColor:'#ff4500',

            inactiveTintColor:'#bdbdbd',
            style:{
               height:70,

                backgroundColor:'#fff',
                // borderTopWidth:1,

                // borderTopColor:'#D3D3D3'
            },

            labelStyle:{
                fontFamily: 'IRANSansMobile(FaNum)',
                fontSize:13,
            }
        },
       initialRouteName:'Home'
    }
);

export default createAppContainer(AppTabNavigator);
