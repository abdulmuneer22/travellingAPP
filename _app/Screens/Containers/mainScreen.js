import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  AsyncStorage
} from 'react-native';

const window = Dimensions.get('window');

var ScrollableTabView = require('react-native-scrollable-tab-view');

import SideMenu from './sideMenu'
import Home from './home'
import Bookings from './bookings'



class MainScreen extends Component {
 render(){
    return(
      <View style={{flex : 1}}>
               <View style={{marginBottom : 10}}></View>
                <ScrollableTabView>

                <Home tabLabel="Home" style={{flex : 1}}/>
                <Bookings tabLabel="Bookings" style={{flex : 3}} />
                </ScrollableTabView>
            
    </View>
    )
  }
}

export default MainScreen

