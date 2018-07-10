import { AppRegistry, YellowBox } from 'react-native';
import App from './App';


AppRegistry.registerComponent('manager', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
YellowBox.ignoreWarnings(['Setting a timer for a long period of time, ']);
