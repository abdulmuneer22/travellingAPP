import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//import Labels from '.app/labels';
import NavigationBar from '../components/navigationBar'


class SearchFlights  extends Component {
  render() {
    return (
      <View style={{
        flex: 1, backgroundColor: 'white'
      }}>

      <NavigationBar/>


      </View>
      
    );
  }
}

export default SearchFlights