import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class ListOptions extends Component{
    render(){
        
        return(
            <TouchableOpacity style={{flexDirection : 'row',padding : 10}}>
            
            <TouchableHighlight style={{flex : 2,marginLeft : 5}}>
            <Icon name= {this.props.icon_name} size={25} color="#757575"/>
            </TouchableHighlight>

            <Text style={{flex : 10, marginTop :3}}>{this.props.listText}</Text>

            <TouchableHighlight style={{marginRight :5, flex : 1}}>
            <Icon name= {'chevron-right'} size={25} color="#757575"/>
            </TouchableHighlight>
            
            </TouchableOpacity>
            )
    }

}


export default ListOptions