import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
  } from 'react-native';

export default class Daftar extends React.Component{
  
constructor (props){
    super(props)
    this.state = {
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhone: '',
      TextInputPassword: ''
    }
  }

  InputUsers = () => {
    const {TextInputName} = this.state;
    const {TextInputEmail} = this.state;
    const {TextInputPhone} = this.state;
    const {TextInputPassword} = this.state;

    fetch('http://api.ifreethink.net/Z1515051002/insert.php',{
      method:'POST',
      header : {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body : JSON.stringify({
        name: TextInputName,
        email: TextInputEmail,
        phone:TextInputPhone,
        password:TextInputPassword,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      })
  }
  
DataUsers = () => {
  this.props.navigation.navigate('DataView');
}

  render(){
    return(
      <View style= {styles.container}>
          <Image style={{width: 95, height: 95, marginTop:40}}
            source={require('./Image/LOGO.png')}
            />
            <Text style={styles.logoText}>Simply-Login_Profil</Text>

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          onChangeText = {TextInputValue => this.setState ({TextInputName: TextInputValue})}
          placeholderTextColor="#9E9E9E"
          />
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            onChangeText = {TextInputValue => this.setState ({TextInputEmail: TextInputValue})}
            placeholderTextColor="#9E9E9E"
            />
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Phone"
              keyboardType='numeric'
              onChangeText = {TextInputValue => this.setState ({TextInputPhone: TextInputValue})}
              placeholderTextColor="#9E9E9E"
              />

            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              onChangeText = {TextInputValue => this.setState ({TextInputPassword: TextInputValue})}
              secureTextEntry={true}
              placeholderTextColor="#9E9E9E"
              />

            <TouchableOpacity activeopacity = {.4} style={styles.button} onPress={this.InputUsers}>
              <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.DataUsers}>
              <Text style={styles.buttonText}>Data Users</Text>
            </TouchableOpacity>

          <View style={styles.signupContent}>
              <Text style={styles.textSign}>Sudah Punya Akun. </Text>
              <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate('Login')}>
                  <Text style={styles.daftarButton}>Masuk</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    backgroundColor: '#ff9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:5
  },
  signupContent:{
    flexGrow: 1,
    justifyContent: 'center',
    marginTop:20,
    alignItems: 'flex-end',
    flexDirection:'row',
    paddingVertical:16
  },
  textSign:{
    color:'#757575',
    fontSize:17
  },
  daftarButton:{
    color:'#212121',
    fontSize:16,
    fontWeight:'500'
  },
  inputBox:{
    width:250,
    backgroundColor:'#EEEEEE',
    borderRadius:25,
    paddingHorizontal:13,
    fontSize:16,
    color:'#9E9E9E',
    marginVertical:5,
    padding:5
  },
  button:{
    width:250,
    backgroundColor:'#BDBDBD',
    borderRadius:25,
    marginVertical:3,
    paddingVertical:3
  },
  buttonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#424242',
    textAlign:'center'
  }
});
