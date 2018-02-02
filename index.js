import { AppRegistry } from 'react-native';
import HomeScreen from './src/App';
import ProfileScreen from './src/Reg';

import {StackNavigator} from 'react-navigation';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

AppRegistry.registerComponent('nice', () => App);
