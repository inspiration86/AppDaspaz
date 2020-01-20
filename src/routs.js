//import {Login,Splash,Home} from '../index';
import Login from './components/screens/Login';
import Splash from './components/screens/Splash';
import SelectUser from './components/screens/SelectUser';
import RegisterSellerUser from "./components/screens/RegisterSellerUser";
import Drawer from './components/layouts/DashboardSeller';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RootStack = createStackNavigator({
        Drawer: {screen: Drawer,
            navigationOptions: ({navigation}) => ({
                header: null,
            })},
        Splash: {screen: Splash},
        SelectUser: {
            screen: SelectUser,
            navigationOptions: ({navigation}) => ({
                header: null,
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                header: null,
            })
        },
        RegisterSellerUser: {
            screen: RegisterSellerUser, navigationOptions: ({navigation}) => ({
                header: null,
            })
        },

    },
    {
        initialRouteName: 'Drawer',
    },
    {
        defaultNavigationOptions: {header: null}
    }
);
export default createAppContainer(RootStack);