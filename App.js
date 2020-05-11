import React, {Component} from 'react';
import { enableScreens } from 'react-native-screens';
import Home from './Screens/Home';
import {
   View,
   Text
} from 'react-native';
import Navigator from './routes/HomeStack';

export default class App extends Component{
    render(){
        return(
            <Navigator/>
        );
    }
}
