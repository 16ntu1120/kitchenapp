import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/home';

const appContainer = createStackNavigator({
  Home : HomeScreen
},{
  initialRouteName : 'Home'
})

export default createAppContainer(appContainer);
