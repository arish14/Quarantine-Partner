import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../Screens/Home';
import Options from '../Screens/Options';
import Images from '../Screens/Images';
import Signup from "../Screens/Signup";
const screens = {
    Home:{
        screen: Home
    },
    Options:{
        screen: Options
    },
    Images:{
        screen: Images
    },
    Signup:{
        screen: Signup
    }
}

const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack);
