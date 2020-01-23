import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import MessegeScreen from '../screens/messegeScreen';
import ElanScreen from '../screens/ElanScreen';
import SefareshtScreen from '../screens/SefareshatScreen';
import SefareshatAmadehScreen from '../screens/SefareshatAmdeh';
import {Header, Left, Right, Body, Container, Footer, Icon} from 'native-base';
import DramadScreen from '../screens/DramadhaScreen';
import SabtTavanScreen from '../screens/SabtTavanScreen';
import GHavaninScreen from '../screens/GhavaninScreen';
import TamasScreen from '../screens/TamasScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import {Icon} from 'react-native-elements';
const {width} = Dimensions.get('window');
const windowHeight = Dimensions.get('window').height;
export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}

const CustomDrawerComponent = props => (
    <View style={{flex: 1}}>
        <Header style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/logo1.png')}
                style={{width: '102%', height: '100%', opacity: 0.3}}
                resizeMode="stretch"></ImageBackground>
            <Image
                source={require('../../../assets/images/logo1.png')}
                style={styles.containerimage}
            />
        </Header>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>

        <Footer style={styles.containerfooter}>
            <View style={styles.containerview}>
                <TouchableOpacity>
                    <Icon type="FontAwesome" name="send-o" style={styles.containericon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="FontAwesome"
                        name="google-plus"
                        style={styles.containericon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="FontAwesome"
                        name="whatsapp"
                        style={styles.containericon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="FontAwesome"
                        name="instagram"
                        style={styles.containericon}
                    />
                </TouchableOpacity>
            </View>
        </Footer>
    </View>
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        'صندوق پیام': MessegeScreen,
        'اعلان': ElanScreen,
        'سفارشات مشتری': SefareshtScreen,
        'سفارشات در حال آماده سازی': SefareshatAmadehScreen,
        'درآمدها': DramadScreen,
        'ثبت توانایی ها': SabtTavanScreen,
        'قوانین موجود': GHavaninScreen,
        'تماس با ما': TamasScreen,
    },
    {
        drawerPosition: 'right',
        contentComponent: CustomDrawerComponent,

        drawerWidth: width - 80,
        useNativeAnimations: true,
        drawerBackgroundColor: 'white',
        contentOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#000',
            activeBackgroundColor: '#80009d',
            inactiveBackgroundColor: '#ffff',
            backgroundColor: '#fff',
            //activeText: 'red',
            itemsContainerStyle: {
                marginHorizontal: 6,
                marginTop: 10,
                marginBottom: 10,
            },
            iconContainerStyle: {
                opacity: 1,
                color: 'red',
            },
            itemStyle: {
                height: 45,
                borderRadius: 5,
            },
        },
    },
);

const AppContainer = createAppContainer(AppDrawerNavigator);
const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: '#80009d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerimage: {
        borderRadius: 75,
        width: 90,
        height: 90,
        marginTop: 5,
        marginBottom: 20,
        // marginLeft: '30%',
        position: 'absolute',
    },
    containericon: {
        color: '#ffff',
        fontSize: 22,
    },

    containerview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },

    containerfooter: {
        // height:35,
        backgroundColor: '#80009d',
        borderTopWidth: 1,
        borderTopColor: '#a43eac',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    containerview1: {
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        marginTop: 5,
    },
    containertext: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -90,
        marginTop: 80,
        color: '#ffff',
        position: 'relative',
    },
});
