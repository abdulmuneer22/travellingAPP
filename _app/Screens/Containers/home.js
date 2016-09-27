import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


import MenuCard from '../components/menuCard'
import ListCard from '../components/listCard'


class Home  extends Component {
  render() {
    return (

      <ScrollView>
      <View style={{
        //flex: 1,
        height : 800, 
        backgroundColor: '#CFD8DC',
        //margin : 5,
        marginBottom : 10
      }}>
      
      <MenuCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      
      </View>
      </ScrollView>
    );
  }
}

export default Home