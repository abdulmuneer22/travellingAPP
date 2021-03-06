import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MenuIcon from './menuIcon'
import IconButton from './iconButton'

class MenuCard  extends Component {
  render() {
    //console.log(this.props)
    return (
      <View style={{
          backgroundColor : 'white', 
          //height : 150,
          margin :10,
          borderColor : 'white',
          borderRadius : 2,
          paddingTop : 20,
          
        }}>

        <View style={{
        flexDirection : 'row',
        alignItems :'stretch',
        justifyContent : 'center',
         }}
         
         >
            <IconButton name="flight" nav = "Flights" navigator={this.props.navigator}/>
            <IconButton name="hotel" nav = "Hotels"/>
            <IconButton name="home" nav = "HomeStay"/>
            <IconButton name="local-taxi" nav = "Cab"/>
        </View>

        <View style={{
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center',
        paddingBottom : 10
         }}>
            <IconButton name="local-activity" nav = "Activities"/>
            <IconButton name="directions-bus" nav = "Bus"/>
            <IconButton name="beach-access" nav = "Holidays"/>
        </View>
        
      </View>
      
    );
  }
}

export default MenuCard