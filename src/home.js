import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

class HomeScreen extends React.Component{
  render(){
    return (
      <View style = {{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
      }}>
        <Text> Home Screen </Text>
      </View>
    );
  }
};

export default HomeScreen;
