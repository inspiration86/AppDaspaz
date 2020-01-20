import {Image,View, Button, StyleSheet,ScrollView,Text} from "react-native";
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import ElanScreen from '../screens/ElanScreen';
import SefareshtScreen from '../screens/SefareshatScreen';
import GHavaninScreen from '../screens/GhavaninScreen';
import React from "react";
import {Body, Footer, Header, Icon, Left, Right} from "native-base";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

class MyHomeScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>به زودی طراحی می شود</Text>
            </View>

        );
    }
}

class MyNotificationsScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>به زودی طراحی می شود</Text>
            </View>
        );
    }
}

const HomeNavigator = createStackNavigator({
        Home: MyHomeScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                title: 'صفحه اصلی',
                headerStyle: {
                    backgroundColor: '#00bfa5',
                    color:'#ffffff',
                    fontFamily:'IRANSansWeb(FaNum)',

                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'IRANSansWeb(FaNum)',
                    color: '#ffffff',
                    fontSize: 16
                },
                headerRight: (
                    <FontAwesomeIcon icon={faBars} size={20} style={{color:'#ffffff',marginRight:10}}  onPress={() => navigation.openDrawer()}/>
                )
            }

        }
    });
const ElanScreenNavigator = createStackNavigator({
        Home: ElanScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                title: 'اعلان/پیام',
                headerStyle: {
                    backgroundColor: '#00bfa5',
                    color:'#ffffff',
                    fontFamily:'IRANSansWeb(FaNum)',

                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'IRANSansWeb(FaNum)',
                    color: '#ffffff',
                    fontSize: 16
                },
                headerRight: (
                    <FontAwesomeIcon icon={faBars} size={20} style={{color:'#ffffff',marginRight:10}}  onPress={() => navigation.openDrawer()}/>
                )
            }

        }
    });
const SefareshNavigator = createStackNavigator({
        Home: SefareshtScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                title: 'سفارشات مشتري',
                headerStyle: {
                    backgroundColor: '#00bfa5',
                    color:'#ffffff',
                    fontFamily:'IRANSansWeb(FaNum)',

                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'IRANSansWeb(FaNum)',
                    color: '#ffffff',
                    fontSize: 16
                },
                headerRight: (
                    <FontAwesomeIcon icon={faBars} size={20} style={{color:'#ffffff',marginRight:10}}  onPress={() => navigation.openDrawer()}/>
                )
            }

        }
    });
const RulesNavigator = createStackNavigator({
        Home: SefareshtScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                title: 'قوانين موجود ',
                headerStyle: {
                    backgroundColor: '#00bfa5',
                    color:'#ffffff',
                    fontFamily:'IRANSansWeb(FaNum)',

                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'IRANSansWeb(FaNum)',
                    color: '#ffffff',
                    fontSize: 16
                },
                headerRight: (
                    <FontAwesomeIcon icon={faBars} size={20} style={{color:'#ffffff',marginRight:10}}  onPress={() => navigation.openDrawer()}/>
                )
            }

        }
    });
const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#F06',
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
        fontSize: 22,
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
        backgroundColor: '#F06',
        borderTopWidth: 1,
        borderTopColor: '#F06',
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
const CustomDrawerComponent = props => (
    <View style={{flex: 1}}>
        <Header style={styles.container}>
            <Left />
            <Body>
                <Image
                    source={require('../../../assets/images/logo3.png')}
                    style={styles.containerimage}
                />
                <Body>
                    <View style={styles.containerview1}>
                        <Text style={styles.containertext}>arka</Text>
                    </View>
                </Body>
            </Body>

            <Right></Right>
        </Header>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
        <Footer style={styles.containerfooter}>
            <View style={styles.containerview}>
                <Icon type="FontAwesome" name="send-o" style={styles.containericon} />
                <Icon type="FontAwesome" name="twitter" style={styles.containericon} />
                <Icon type="FontAwesome" name="facebook" style={styles.containericon} />

            </View>
        </Footer>
    </View>
);
const MyDrawerNavigator = createDrawerNavigator({
        'صفحه اصلی': {
            screen: HomeNavigator,
        },
        'پیام ها/اعلان ها': {
            screen: ElanScreenNavigator,
            headerStyle:{
                alignItems:'center'
            },
        },
        'سفارشات مشتري': {
            screen: SefareshNavigator,
        },
        'سفارشات در حال آماده سازي': {
            screen: HomeNavigator,
        },
        'درآمدها': {
            screen: HomeNavigator,
        },
        'ثبت توانايي ها': {
            screen: HomeNavigator,
        },
        'قوانين موجود':{
            screen: RulesNavigator,
        },
        'تماس با ما': {
            screen: HomeNavigator,
        },

    },
    {
        drawerPosition: 'right',
        drawerWidth: 250,
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#000',
            activeBackgroundColor: '#F06',
            inactiveBackgroundColor: '#ffff',
            itemsContainerStyle: {
                marginHorizontal: 8,
                border: 10,
            },
            itemStyle: {
                height: 40,
                // borderRadius: 20,
                justifyContent:'center',
                fontFamily:'IRANSansWeb(FaNum)'
            },
            style:{

            }
        },
    });

export default createAppContainer(MyDrawerNavigator);