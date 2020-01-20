import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import SellerLogin from '../screens/SellerLogin';
import Home from '../screens/Home';
import SelectUser from '../screens/SelectUser';
import Rules from '../screens/Rules';

export default class BottomTabNavigator extends Component {
    render() {
        return <AppContainer />;
    }
}
const AppMaterialBottomTabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                barStyle: {backgroundColor: '#fa1d7a'},
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon  size={25} name={'ios-home'} />
                    </View>
                ),
            },
        },
        Login: {
            screen: SellerLogin,
            navigationOptions: {
                tabBarLabel: 'SellerLogin',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
                    </View>
                ),
                barStyle: {backgroundColor: '#09c6b1'},
            },
        },
        Cart: {
            screen: SelectUser,
            navigationOptions: {
                tabBarLabel: 'SelectUser',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
                    </View>
                ),
                barStyle: {backgroundColor: '#09c6b1'},
            },
        },

        Details: {
            screen: Rules,
            navigationOptions: {
                tabBarLabel: 'Rules',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
                    </View>
                ),

                barStyle: {backgroundColor: '#fa1d7a'},
            },
        },
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#f0edf6',
            inactiveTintColor: '#3e2465',
            indicatorStyle: {
                height: 0,
            },
            showIcon: true,
        },
    },
);

const AppContainer = createAppContainer(AppMaterialBottomTabNavigator);
