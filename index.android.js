import React, { Component } from 'react';
import {
  AppRegistry,
  
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
