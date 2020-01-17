//import {Login,Splash,Home} from '../index';
import Home  from './components/screens/Home';
import Login  from './components/screens/Login';
import Splash  from './components/screens/Splash';
import {createStackNavigator,createAppContainer} from 'react-navigation-stack';
const RootStack = createStackNavigator({
    Home:{screen:Home},
    Login:{screen:Login},
    Splash:{screen:Splash},
});
export default createAppContainer(RootStack);