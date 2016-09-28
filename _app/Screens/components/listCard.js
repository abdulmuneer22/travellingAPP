import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//import Labels from '.app/labels';
import ListOptions from './listOptions'


class ListCard  extends Component {
  render() {
    return (
      <View style={{
          backgroundColor : 'white', 
          height : 150,
          marginLeft :10,
          marginRight : 10,
          marginTop : 10
         
        }}>

        <ListOptions icon_name = "check" listText = "Web Check-IN" {...this.props}/>
        <ListOptions icon_name = "alarm" listText = "Last Minute Hotel Deals" {...this.props}/>
        <ListOptions icon_name = "local-offer" listText = "Offers & Discounts" {...this.props}/>
        
      </View>
      
    );
  }
}

export default ListCard