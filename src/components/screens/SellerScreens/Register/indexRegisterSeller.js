import {createStackNavigator} from "react-navigation-stack";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {createAppContainer} from 'react-navigation';
import StepAtributeUser from './StepAtributUser';
import StepUploadFileUser from "./StepUploadFileUser";
import SelectLocation from "./SelectLocation";
import StepUserPass from "./StepUserPass";
const RootStack = createStackNavigator({
    Location:{
        screen: SelectLocation, navigationOptions: ({navigation}) => ({
            header:null,
            headerStyle: {
                backgroundColor: '#00bfa5',

            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('5%'),
                fontFamily: 'IRANSansWeb(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },


        }),
    },

        StepAtributeUser:{
        screen: StepAtributeUser, navigationOptions: ({navigation}) => ({
            header:null,
            headerStyle: {
                backgroundColor: '#00bfa5',

            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('5%'),
                fontFamily: 'IRANSansWeb(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },


        }),
    },
    stepUploadFile: {
        screen: StepUploadFileUser, navigationOptions: ({navigation}) => ({
            title: `مرحله دوم:آپلود مدارک  `,
            headerStyle: {
                backgroundColor: '#00bfa5',

            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('10%'),
                fontFamily: 'IRANSansWeb(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },
        })
    },
        StepUserPass: {
        screen: StepUserPass, navigationOptions: ({navigation}) => ({
            title: `مرحله سوم: نام کاربری و رمز ورود  `,
            headerStyle: {
                backgroundColor: '#00bfa5',

            },
            headerTitleStyle: {
                // alignSelf:'right',
                marginLeft: hp('10%'),
                fontFamily: 'IRANSansWeb(FaNum)',
                color: '#ffffff',
                fontSize: 16
            },
        })
    },

},
{
    initialRouteName: 'Location',
},);
export default createAppContainer(RootStack);
