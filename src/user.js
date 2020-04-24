import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

class UserScreen extends React.Component{
  render(){
    return (
      <View style = {{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
      }}>
        <Text> User Screen </Text>
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Home')}
        >
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default UserScreen;
