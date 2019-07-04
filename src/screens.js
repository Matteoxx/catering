import {Navigation} from 'react-native-navigation';
import Home from './screens/Home';
import Initializing from './screens/Initializing';
import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import Screen2 from './screens/Screen2';

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Initializing', () => Initializing);
  Navigation.registerComponent('SignIn', () => SignIn);
  Navigation.registerComponent('SignUp', () => SignUp);
  Navigation.registerComponent('Screen2', () => Screen2);
}