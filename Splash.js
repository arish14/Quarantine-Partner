
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

export default class Splash extends Component {

  render(){

    return(

      <View style={styles.container}>
        <Image
        style={styles.logo} 
        source={require('./images/logo.jpg')}/>
        <Text style={styles.txt}>The Quaratine Partner
        <Text style={styles.in}>The Entertainment App</Text>
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

  logo:{
    justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
  },
  txt:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
    fontWeight: '300',
    color: 'white'
  },
  in:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 20,
    fontWeight: '300',
    color: 'white'
  },
  container:{
    backgroundColor:'#2C3335',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1
  }
});

export Splash;