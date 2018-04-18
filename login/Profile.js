import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class Profile extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
          <View style={styles.signupContent}>
              <Text>Ini Profile</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5722',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5
  },
  signupContent:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection:'row',
    paddingVertical:16
  }
});
