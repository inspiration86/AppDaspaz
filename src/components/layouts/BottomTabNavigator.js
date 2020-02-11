import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Products from './Header';
import NewProducts from './Header';
import Sellers from './Header';
import BestProducts from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}

const AppMaterialTopTabNavigator = createMaterialBottomTabNavigator(
    {
        'محصولات ما':{screen:Products,
            navigationOptions:{
                tabBarLabel:'محصولات ما',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'home'}/>
                    </View>),
            }
        },
        'سفارش جدید': {screen:NewProducts,
            navigationOptions:{
                tabBarLabel:'سفارش جدید',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'star'}/>
                    </View>),

            }
        },
        ' محصول جدید': {screen:NewProducts,
            navigationOptions:{
                tabBarLabel:' محصول جدید',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        {/*<FontAwesome size={20} icon={faPlusCircle} />*/}
                        <Icon style={[{color: tintColor,marginBottom:10}]} size={30} name={'plus'}/>
                    </View>),

            }
        },
        'سفارش های قبلی':{screen:BestProducts,
            navigationOptions:{
                tabBarLabel:'بهترین ها',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'heart'}/>
                    </View>),

            }
        },
        'فیلتر': {screen:Sellers,
            navigationOptions:{
                tabBarLabel:'فیلتر',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'filter'}/>
                    </View>),
            }
        },
    },
    {
        // initialRouteName: 'محصولات',
        activeColor: '#fff',
        inactiveTintColor: 'grey',
        barStyle: { backgroundColor: 'red' },
        swipeEnabled: true,
        animationEnabled: true,
        shifting:true,

    },
);

const AppContainer = createAppContainer(AppMaterialTopTabNavigator);
