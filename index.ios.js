import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text

} from 'react-native';

import APP from './_app/Screens/main'

class travelApp extends Component {
  render() {
    return (
      <APP/>
    );
  }
}



AppRegistry.registerComponent('travelApp', () => travelApp);
