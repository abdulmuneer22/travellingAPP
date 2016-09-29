import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//import Labels from '.app/labels';
import NavigationBar from '../components/navigationBar'
var ScrollableTabView = require('react-native-scrollable-tab-view');
import OneWay from './OneWay'
import RoundTrip from './RoundTrip'

class SearchFlights  extends Component {
  render() {
    return (
      <View style={{
        flex: 1, backgroundColor: 'white'
      }}>

      <NavigationBar leftButton="arrow-back" title= "Search Flights" rightButton="restore" {...this.props}/>

      <ScrollableTabView style={{backgroundColor :'#4c8bfb'}}
      tabBarTextStyle={{color :'white'}}
      >

                <OneWay tabLabel="ONE WAY" 
                navigator={this.props.navigator}
                style={{flex : 1}}/>
                <RoundTrip tabLabel="ROUND TRIP" style={{flex : 3}} />
                </ScrollableTabView>

      </View>
      
    );
  }
}

export default SearchFlights