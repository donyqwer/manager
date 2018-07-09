import { AppRegistry, YellowBox } from 'react-native';
import App from './App';


AppRegistry.registerComponent('manager', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
