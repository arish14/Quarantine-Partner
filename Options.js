import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Image,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

export default function Options({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Signup')
    }
      return (
        <View style={styles.container}>
          <Text style={styles.txt}>Choose Your Option!</Text>
          <TouchableOpacity style={styles.b1}>
              <Text style={styles.inn}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.b2}>
              <Text style={styles.inn}>Songs</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={pressHandler}
          style={styles.b3}>
              <Text style={styles.inn}>Images</Text>
          </TouchableOpacity>
        </View>
        
      );
    }
  

  const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192A56'
      },
      b1:{
    marginTop:5,
    marginBottom: 50,
    paddingLeft: 125,
    paddingRight: 125,
    height: 40,
    backgroundColor:'#2c3e50',
    borderRadius: 20,
    borderColor: '#fff',
      },
      inn:{
        color: '#1abc9c',
        fontSize: 20,
        textAlign:'center',
      },
      txt:{
        color: '#1abc9c',
          fontSize: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 25
      },
      b2:{
        marginTop:10,
        marginBottom: 100,
        marginTop:10,
        marginBottom: 50,
        paddingLeft: 125,
        paddingRight: 125,
        height: 40,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#2c3e50',
        borderRadius:20,
        borderColor: '#fff'
      },
      b3:{
        marginTop:10,
        marginBottom: 100,
        paddingTop:10,
        paddingBottom:10,
        marginTop:10,
        marginBottom: 100,
        paddingLeft: 125,
        paddingRight: 125,
        height: 40,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#2c3e50',
        borderRadius: 20,
        borderColor: '#fff'
      }
      
  })