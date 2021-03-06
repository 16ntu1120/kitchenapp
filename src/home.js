import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
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
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('User')}
        >
          <Text>Go to User</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default HomeScreen;
