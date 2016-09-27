import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  AsyncStorage
} from 'react-native';

const window = Dimensions.get('window');



class SplashScreen extends Component {



componentDidMount(){



setTimeout(()=>
    {


       this.props.navigator.push({name:'mainScreen'})

    },
    1000

      );

      //this.props.navigator.push({name:'mainScreen'})

}


  render(){
    return(
      <View style={{backgroundColor : '#FF7E00'}}>

      <Image style = {{flex : 1,width : window.width , height : window.height}}
      resizeMode='cover'
      source={require('./images/SplashScreen.png')}/>


      </View>
    )
  }
}

export default SplashScreen

const styles = StyleSheet.create({

  container : {
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'
},
homeBgImage : {
    flex : 1

},
});