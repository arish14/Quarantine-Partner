import React, { Component } from 'react';
import {
   StyleSheet,
   Image,
   Text,
   View,
   Button
} from 'react-native';


export default function Home({navigation}) {

    const pressHandler = () => {
        navigation.navigate('Options')
    }
  
      return(
         <View style={styles.container}>
            <Image style={styles.logo}
               source={require('../images/logo.jpg')}/>
            <Text style={styles.txt}>Quaratine Partner</Text>
            <Text style={styles.inn}>The Entertainment App</Text>
            <Button style={styles.btn}
               title="Lets get started"
               color = 'red'
               onPress={pressHandler}
            />

         </View>
      );
   }


const styles = StyleSheet.create({
   container:{
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#192A56'
   },
   txt:{
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
      fontWeight: '100',
      color: 'white'
   },
   logo:{
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 150
   },
   btn:{
      color: 'grey'
   },
   inn:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 100,
      fontSize: 15,
      color: 'white'
   },
   btn:{
      borderRadius: 25,
      paddingVertical:12,
      paddingHorizontal:25
   }
})