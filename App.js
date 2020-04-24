import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const appContainer = createStackNavigator({
  Home : HomeScreen,
  User : UserScreen
},{
  initialRouteName : 'Home',
  headerMode: "none"
})

export default createAppContainer(appContainer);
