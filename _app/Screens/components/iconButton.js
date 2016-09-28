import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


class IconButton  extends Component {
    componentDidMount(){
        //console.log(this.props)
    }
  render() {
      
    return (
    <TouchableOpacity 
    style={{alignItems : 'center',
    padding : 10,
    margin : 5,
    alignSelf : 'center'
  }}
  
  onPress={()=> {
    //alert("test")
    this.props.navigator.push({name:'flight'})
  
}}
  >
    
    <Icon name= {this.props.name} size={25} color="#03A9F4" />
    <Text style={{marginTop : 5}}>{this.props.nav}</Text>
    </TouchableOpacity>
      
    );  
  }
}

export default IconButton