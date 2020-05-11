import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

export default function Options({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Images will be shown here</Text>
            <Image style={styles.logo}
               source={require('../images/4.jpg')}/>
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
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontWeight: '100',
        color: 'white'
     },
     logo:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 150,
        height: 300,
        width: 300,
        marginBottom: 250
     }
})