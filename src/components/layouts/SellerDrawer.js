import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    I18nManager
} from 'react-native';
I18nManager.allowRTL(false);
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import MessegeScreen from './screens/messegeScreen';
import ElanScreen from './screens/ElanScreen';
import SefareshtScreen from './screens/SefareshatScreen';
import SefareshatAmadehScreen from './screens/SefareshatAmdeh';
import {Header, Left, Right, Body, Container, Footer, Icon} from 'native-base';
import DramadScreen from './screens/DramadhaScreen';
import SabtTavanScreen from './screens/SabtTavanScreen';
import GHavaninScreen from './screens/GhavaninScreen';
import TamasScreen from './screens/TamasScreen';
//import {Icon} from 'react-native-elements';
const {width} = Dimensions.get('window');
export default class SellerDrawer extends Component {
    render() {
        return <AppContainer />;
    }
}

const CustomDrawerComponent = props => (
    <View style={{flex: 1}}>
        <Header style={styles.container}>
            <Left />
            <Body>
                <Image
                    source={require('./assets/images/logo3.png')}
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
                <Icon
                    type="FontAwesome"
                    name="instagram"
                    style={styles.containericon}
                />
            </View>
        </Footer>
    </View>
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        'صندوق پيام': MessegeScreen,
        'اعلان': ElanScreen,
        'سفارشات مشتري': SefareshtScreen,
        'سفارشات در حال آماده سازي': SefareshatAmadehScreen,
        'درآمدها': DramadScreen,
        'ثبت توانايي ها': SabtTavanScreen,
        'قوانين موجود': GHavaninScreen,
        'تماس با ما': TamasScreen,
    },
    {
        drawerPosition: 'right',
        contentComponent: CustomDrawerComponent,

        drawerWidth: width - 110,
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
                borderRadius: 20,
            },
        },
    },
);

const AppContainer = createAppContainer(AppDrawerNavigator);
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
});
