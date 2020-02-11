//import {SellerLogin,Splash,Home} from '../index';
import SellerLogin from "./components/screens/SellerScreens/Login/ReduxLogin";
import CustomerLogin from './components/screens/CustomerLogin';
import Splash from './components/screens/Splash';
import SelectUser from './components/screens/SelectUser';
import RegisterSellerUser from "./components/screens/SellerScreens/Register/ReduxRegister";
import DashboardSeller from './components/layouts/DashboardSeller';
import RegisterProductsSeller from "./components/screens/SellerScreens/RegisterProducts";
import AppLoginRegisterCustomer from "./components/screens/CustomerScreens/AppLoginRegister";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const RootStack = createStackNavigator({

        DashboardSeller: {screen: DashboardSeller,
            navigationOptions: ({navigation}) => ({
                header: null,
            })},
        RegisterProductsSeller: {screen: RegisterProductsSeller,
            navigationOptions: ({navigation}) => ({
                header: null,
            })},
        AppLoginRegisterCustomer: {screen: AppLoginRegisterCustomer,
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
        initialRouteName: 'DashboardSeller',
    },
    {
        defaultNavigationOptions: {header: null}
    }
);
export default createAppContainer(RootStack);
