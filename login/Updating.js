
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

  export default class FormUpdate extends React.Component{
    
  constructor (props){
    super(props)
    this.state = {
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhone: '',
      TextInputPassword: ''
    }
  }

// componentDidMount () {
//     this.setState({
//       TextInputId : this.props.navigation.state.params.id,
//       TextInputName : this.props.navigation.state.params.name,
//       TextInputEmail : this.props.navigation.state.params.email,
//       TextInputPhone : this.props.navigation.state.params.phone,
//       TextInputPassword : this.props.navigation.state.params.password
//     })
//   }

  	UpdateUsers = () => {
	fetch('http://api.ifreethink.net/Z1515051002/update.php',{
      method:'POST',
      header : {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body : JSON.stringify({
 		id: this.state.TextInputId,
 		name: this.state.TextInputName,
        email: this.state.TextInputEmail,
        phone: this.state.TextInputPhone,
        password: this.state.TextInputPassword
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);
			this.props.navigation.navigate('DataView');
      }).catch((error) => {
        console.error(error);
      })
 	}

	DeleteUsers = () => { 
	fetch('http://api.ifreethink.net/Z1515051002/delete.php',{
      method:'POST',
      header : {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body : JSON.stringify({
 		id: this.state.TextInputId
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);
          	this.props.navigation.navigate('DataView');
      }).catch((error) => {
        console.error(error);
      })
	 }


    render(){
      return(
        <View style={styles.container}>
          <TextInput style={styles.inputBox}
          //value = {this.state.TextInputName}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          onChangeText = {TextInputValue => this.setState ({TextInputName: TextInputValue})}
          placeholderTextColor="#9E9E9E"
          />
          <TextInput style={styles.inputBox}
          	//value = {this.state.TextInputEmail}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            onChangeText = {TextInputValue => this.setState ({TextInputEmail: TextInputValue})}
            placeholderTextColor="#9E9E9E"
            />
            <TextInput style={styles.inputBox}
              //value = {this.state.TextInputPhone}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Phone"
              keyboardType='numeric'
              onChangeText = {TextInputValue => this.setState ({TextInputPhone: TextInputValue})}
              placeholderTextColor="#9E9E9E"
              />

            <TextInput style={styles.inputBox}
              //value = {this.state.TextInputPassword}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              onChangeText = {TextInputValue => this.setState ({TextInputPassword: TextInputValue})}
              secureTextEntry={true}
              placeholderTextColor="#9E9E9E"
              />

            <TouchableOpacity activeopacity = {.4} style={styles.button} onPress={this.UpdateUsers}>
              <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={this.DeleteUsers}>
              <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>
      </View>
      )
    }
  }

  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#FFCA28',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    marginRight:5
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
    backgroundColor:'#29B6F6',
    borderRadius:25,
    marginVertical:3,
    paddingVertical:3
  },
  button2:{
    width:250,
    backgroundColor:'#EF5350',
    borderRadius:25,
    marginVertical:3,
    paddingVertical:3
  },
  buttonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#FAFAFA',
    textAlign:'center'
  }
  });