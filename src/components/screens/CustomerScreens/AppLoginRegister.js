import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import {
    createAppContainer,

} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './LoginScreen';
import RegisteringScreen from './RegisteringScreen';
import { color } from 'react-native-reanimated';

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}

const AppMaterialTopTabNavigator = createMaterialTopTabNavigator(
    {
        'ورود': LoginScreen,
        'ثبت نام': RegisteringScreen
    },
    {
        initialRouteName: 'ورود',
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,

        tabBarOptions: {
            //showLabel: true,
            activeTintColor: '#Dc481e',
            inactiveTintColor: 'grey',
            fontFamily:'IRANSansMobile(FaNum)',
            style: {
                backgroundColor: '#ffff',
                fontFamily:'IRANSansMobile(FaNum)',
            },
            indicatorStyle: {
                height: 3,
                //top: 0,
                backgroundColor: '#Dc481e',
                borderRadius:10,
                fontFamily:'IRANSansMobile(FaNum)',
            },

            showLabel: true,

        }
    }
);

const AppContainer = createAppContainer(AppMaterialTopTabNavigator);
