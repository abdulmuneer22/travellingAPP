
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import SplashScreen from './splashScreen'
import MainScreen from './Containers/mainScreen'


class APP extends Component{

  configureScene(route){
    switch(route.name){

    case 'splashScreen':
    return Navigator.SceneConfigs.FloatFromBottom

    case 'mainScreen':
    return Navigator.SceneConfigs.FloatFromBottom
    

    default :
    return Navigator.SceneConfigs.FloatFromLeft
  }}

  renderScene(route,navigator){

    switch(route.name){

    case 'splashScreen':
    return <SplashScreen  navigator={navigator} />

    case 'mainScreen':
    return <MainScreen  navigator={navigator} />

  }
}



  render(){
    return(

      <Navigator
      style = {styles.mainscreen}
      initialRoute={{name: 'splashScreen'}}
      renderScene={this.renderScene.bind(this)}
      configureScene={this.configureScene.bind(this)}
      />

    )
  }
}


const styles = StyleSheet.create({

  container : {
    //margin : 20,
    //borderWidth : 1,
    //borderColor : 'black',
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'

  },


  row : {

    margin : 5,
    flexDirection : 'row',

    width : 300,

  }

});

export default APP;