import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json



  export default class Home extends React.Component{
    render(){
      return(
        <View style={styles.container}>
          <ImageBackground source={require('./Image/sunset.jpg')} style={styles.backgroundImage}>
            <View style={styles.content}>
              <TouchableOpacity>
                  <Text style={styles.logo}>Simply-LogFil</Text>
              </TouchableOpacity>

                <View style={styles.homeContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                      <Image source={require('./Image/logins.png')} style={styles.inLogo}/>
                  </TouchableOpacity>

                </View>

                <View style={styles.homeContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Info')}>
                      <Image source={require('./Image/info.png')} style={styles.inLogo}/>
                  </TouchableOpacity>
                </View>
            </View>
          </ImageBackground>
          <View>
            <Text style={styles.textFooter}>Copyright @SukaArtawan</Text>
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    },
    backgroundImage:{
      flex:1,
      alignSelf:'stretch',
      width:null,
      justifyContent:'center'
    },
    content:{
      alignItems:'center',
    },
    logo:{
      color:'#424242',
      fontSize:35,
      fontWeight:'bold',
      textShadowColor:'#FFEB3B',
      textShadowOffset: {width:2, height:2},
      textShadowRadius: 15,
      marginBottom:20
    },
    homeContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      width:80,
      height:80,
      padding:2,
      marginLeft:140,
      marginRight:140,
      alignSelf:'stretch',
      borderWidth:1,
      borderColor:'#fff',
      backgroundColor:'rgba(255,255,255,0.1)',
      borderRadius:25

    },
    textFooter:{
      fontSize:16,
      fontWeight:'bold',
      textShadowColor:'#FFEB3B',
      textShadowOffset: {width:2, height:2},
      textShadowRadius: 10,
      padding:5
    },
    inLogo:{
    height: 70,
    width: 70,
  }
  });
