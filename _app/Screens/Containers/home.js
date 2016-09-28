import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity  
  
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const window = Dimensions.get('window');

import MenuCard from '../components/menuCard'
import ListCard from '../components/listCard'

class Home  extends Component {
  render() {
    //console.log(this.props)
    return (

      <ScrollView>
      <View style={{
        //flex: 1,
        height : 800, 
        backgroundColor: '#CFD8DC',
        //margin : 5,
        marginBottom : 10
      }}>
      
      <MenuCard navigator={this.props.navigator}/>
      <ListCard/>
      
      <View style={{
          backgroundColor : 'white', 
          height : 150,
          marginLeft :10,
          marginRight : 10,
          marginTop : 10
         
        }}>
        
        <Image
          style={{
            width: null, 
            height: 160,
          }}
          resizeMode='contain'
          //source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          source={require('../images/banner.png')}/>

      </View>

      <View style={{
          backgroundColor : 'white', 
          height : 150,
          marginLeft :10,
          marginRight : 10,
          marginTop : 10
         
        }}>
        
        <Image
          style={{
            width: window.width-20, 
            height: 160,
          }}
          resizeMode='contain'
          source={require('../images/inviteBanner.png')}/>

      </View>

      <View style={{
          backgroundColor : 'white', 
          height : 150,
          marginLeft :10,
          marginRight : 10,
          marginTop : 10,
          //marginBottom : 20
         
        }}>
        
        <Text style={{
          color : '#607D8B',
          textAlign : 'center',
          padding : 10
        }}>Please rate your experience with us</Text>

        <TouchableOpacity style={{
          alignItems : 'center',
          flexDirection : 'row',
          justifyContent : 'center'
        }}>
        <Icon name= 'star' size={25} color="#03A9F4" style={{padding : 5}}/>
        <Icon name= 'star' size={25} color="#03A9F4" style={{padding : 5}}/>
        <Icon name= 'star' size={25} color="#03A9F4" style={{padding : 5}}/>
        <Icon name= 'star' size={25} color="#03A9F4" style={{padding : 5}}/>
        <Icon name= 'star' size={25} color="#03A9F4" style={{padding : 5}}/>
        
        </TouchableOpacity>

      </View>

      


       

      </View>

      
      
      </ScrollView>
    );
  }
}

export default Home