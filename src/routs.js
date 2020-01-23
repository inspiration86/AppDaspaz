//import {SellerLogin,Splash,Home} from '../index';
import SellerLogin from './components/screens/SellerLogin';
import CustomerLogin from './components/screens/CustomerLogin';
import Splash from './components/screens/Splash';
import SelectUser from './components/screens/SelectUser';
import RegisterSellerUser from "./components/screens/SellerScreens/RegisterSellerUser";
import DashboardSeller from './components/layouts/DashboardSeller';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RootStack = createStackNavigator({

        DashboardSeller: {screen: DashboardSeller,
            navigationOptions: ({navigation}) => ({
                header: null,
            })},



        Splash: {screen: Splash,   navigationOptions: ({navigation}) => ({
                header: null,
            })},

        SelectUser: {
            screen: SelectUser,
            navigationOptions: ({navigation}) => ({
                header: null,
            })
        },
        SellerLogin: {
            screen: SellerLogin,
            navigationOptions: ({navigation}) => ({
                header: null,
            })
        },
        CustomerLogin: {
            screen: CustomerLogin,
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
        initialRouteName: 'Splash',
    },
    {
        defaultNavigationOptions: {header: null}
    }
);
export default createAppContainer(RootStack);