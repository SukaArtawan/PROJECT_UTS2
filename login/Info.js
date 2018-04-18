import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
  } from 'react-native';

export default class Info extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <ImageBackground source={require('./Image/spring.jpg')} style={styles.backgroundImage}>
        <View style={styles.Box}>
            <Image style={{width:125, height:125}}
              source={require('./Image/1.png')}
              />
          <Text>I Gede suka Artawan</Text>

          <Image style={{width:35, height:35}}
            source={require('./Image/graduate.png')}
            />
            <Text style={styles.textDetails}>S1 Pendidikan Teknik Informatika</Text>

            <Image style={{width:35, height:35}}
              source={require('./Image/conatct.png')}
              />
              <Text style={styles.textDetails}>+6287-859-450-685</Text>
              <Text style={styles.textDetails}>awangede92@gmail.com</Text>

              <Image style={{width:35, height:35}}
                source={require('./Image/fb.png')}
                />
                <Text style={styles.textDetails}>Arthawan</Text>

                <Image style={{width:35, height:35}}
                  source={require('./Image/ig.png')}
                  />
                  <Text style={styles.textDetails}>a_arthawan</Text>

          <View style={styles.infoDetails}>
            <Text style={styles.textDetails}>Aplikasi sederhana yang menampilankan User/Pengguna yang sudah Logins.
            Aplikasi ini dibuat untuk memenuhi Mata Kuliah Pemrograman Mobile yang saat ini sedang ditempuh di Universitas Pendidikan Ganesha yang berada di daerah Bali Utara dengan Fakultas Teknik dan Kejuruan yang memilih Jurusan Pendidikan Teknik Informatika.
            </Text>
          </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  backgroundImage:{
    flex:1,
    alignSelf:'stretch',
    width:null,
    justifyContent:'center',
    alignItems:'center'
  },
  infoText:{
    fontSize:26,
    color:'#000000',
    fontWeight:'bold',
    textShadowColor:'#76FF03',
    textShadowOffset: {width:2, height:2},
    textShadowRadius: 15
  },
  infoDetails:{
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    marginBottom:0,
    padding:5,
    alignSelf:'stretch',
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'rgba(255,255,255,0.2)'
  },
  Box:{
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    marginBottom:0,
    padding:2,
    alignSelf:'stretch',
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'rgba(255,255,255,0.3)'
  },
  textDetails:{
    textAlign:'center',
  }
});
