import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Text} from 'react-native';

import 'react-native-gesture-handler';

if (!__DEV__) {
  console.log = function () {};
}

AppRegistry.registerComponent(appName, () => App);

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}
