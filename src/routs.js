//import {Login,Splash,Home} from '../index';
import Login  from './components/screens/Login';
import Splash  from './components/screens/Splash';
import SelectUser from './components/screens/SelectUser';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const RootStack = createStackNavigator({
    Login:{screen:Login},
    Splash:{screen:Splash},
    SelectUser:{screen:SelectUser},
   },
{
    initialRouteName: 'Splash',
  },
    {
        defaultNavigationOptions:{header:null}
    }
    );
export default createAppContainer(RootStack);