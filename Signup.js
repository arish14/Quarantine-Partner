import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import * as firebase from 'firebase';

import {
    Container,
    Content,
    Header,
    Form,
    Input,
    Item,
    Button,
    Label,
    View
} from 'native-base'



var firebaseConfig = {
    
  };

firebase.initializeApp(firebaseConfig);
  
  

  export default class Signup extends React.Component {

    constructor(props){
        super(props)

        this.state = ({
            email: '',
            Password: ''
        })
    }

    signupUser =(email,Password) => {

        try{
            if(this.state.Password.length<6){
                alert("Please enter a strong password")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,Password).then(() => this.props.navigation.navigate('Options'))
        }
        catch(error){
            console.log(error.toString())
        }
    }
    loginUser =(email,Password) => {
        try{
            firebase.auth().signInWithEmailAndPassword(email,Password).then(function(user){
                alert("Successfull")
                navigation.navigate('Options')
            })
        }
        catch(error){
            console.log(error.toString())
        }
    }
      render(){
        return(
            <Container style={styles.container}>
                  <Form>
                      <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                        onChangeText={(email) => this.setState({email})}
                        />
                        </Item>
                        <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry
                            onChangeText={(Password) => this.setState({Password})}
                        />
                        </Item>
                        <Button style={styles.btn}
                        rounded
                        onPress={()=> this.loginUser(this.state.email,this.state.Password)}
                        >
                            <Text style={styles.txt}>Login</Text>
                        </Button>
                        <Button style={styles.btn}
                        rounded
                        onPress={()=> this.signupUser(this.state.email,this.state.Password)}
                        >
                            <Text style={styles.txt}>Signup</Text>
                        </Button>
                  </Form>
              </Container>
          );
      }
  }

  const styles = StyleSheet.create({
      container:{
          justifyContent:'center',
          backgroundColor: '#192A56'
      },
      btn:{
          marginTop: 25
      },
      txt:{
          justifyContent:'center'
      }

  })