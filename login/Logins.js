import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Keyboard
  } from 'react-native';

export default class Logins extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      UserName:'',
      Password:''
    }

  }

  login = () => {
    const {UserName, Password} = this.state;
    
    fetch ('http://api.ifreethink.net/Z1515051002/login.php',{
      method:'POST',
      header : {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body : JSON.stringify({
        name: UserName,
        password:Password,
      })
    }) 
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson == 'Login Berhasil'){
              alert('Sukses');
              this.props.navigation.navigate('Profile');
           }else{
              alert('Salah');
           }
    })
    .catch((error) => {
      console.error(error);
    })

    Keyboard.dismiss();
  }

  render(){
    return(
      <View style= {styles.container}>
            <Image style={{width: 95, height: 95, marginTop:40}}
            source=
            {require('./Image/LOGO.png')}
            />
            <Text style={styles.logoText}>Welcome To Login_Profil App.</Text>
  
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            onChangeText = {UserName => this.setState ({UserName})}
            placeholderTextColor="#9E9E9E"
            />

          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            onChangeText = {Password => this.setState ({Password})}
            secureTextEntry={true}
            placeholderTextColor="#9E9E9E"
            />

            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

          <View style={styles.signupContent}>
              <Text style={styles.textSign}>Belum punya Akun ? </Text>
              <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate('Daftar')}>
                  <Text style={styles.daftarButton}>Daftar</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ff5722',
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
    paddingHorizontal:17,
    fontSize:16,
    color:'#9E9E9E',
    marginVertical:8,
    padding:10,
    borderColor:'black'
  },
  button:{
    width:250,
    backgroundColor:'#BDBDBD',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:9
  },
  buttonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#424242',
    textAlign:'center'
  }
});
