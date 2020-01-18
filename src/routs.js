//import {Login,Splash,Home} from '../index';
import Home  from './components/screens/Home';
import Login  from './components/screens/Login';
import Splash  from './components/screens/Splash';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const RootStack = createStackNavigator({
    Home:{screen:Home},
    Login:{screen:Login},
    Splash:{screen:Splash},
    
},
{
    initialRouteName: 'Login',
  });
export default createAppContainer(RootStack);