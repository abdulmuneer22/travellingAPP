import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';


//import Labels from '.app/labels';

var isLoggedIn = false
class Bookings  extends Component {
  render() {
    return (
      <View style={{
        flex: 1, 
        backgroundColor: '#f5f5f5',
        

      }}>
      {isLoggedIn ? 
        <View>
        
        <Text>Logged In</Text>
        
        
        </View> : 
        
        
        
        <View style = {{
          margin : 20,
          backgroundColor : 'white',
          //height : 400,
          padding : 30
        }}
        elevation = {3}
        >
        
        
        <Text style={{
          color : '#5ba9f8'
        }}>Registered Email ID </Text>

        <TextInput></TextInput>
        <TextInput></TextInput>
        <TouchableHighlight
        style={styles.Button}
        onPress = {()=>{alert("Button")}}
        >
        <Text style={styles.ButtonText}>Login</Text>
        </TouchableHighlight> 

        <Text style={{
          alignSelf : 'flex-end',
          marginTop :5
        }}>Forgot Password ?</Text>

        <View style={{marginTop : 50,marginBottom : 50}}>
        <Text style={{textAlign : 'center',fontSize : 10}}>By Registering With Us , You Agree To TravelAPP's {'\n'}Termas & Conditions</Text>
        </View>
        
        
        </View>}
      </View>
      
    );
  }
}



const styles = StyleSheet.create({
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.7,
  backgroundColor : '#00ce68',
  height : 45,
  borderColor : '#00ce68',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10,
  marginTop : 10

  },

   ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }

});



export default Bookings