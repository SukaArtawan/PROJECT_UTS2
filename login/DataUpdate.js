import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
  } from 'react-native';

export default class DataUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      Name: '',
    };
  }

  EditUsers = () => {
    const { Id } = this.state;
    const { Name } = this.state;
    const { Email } = this.state;
    const { Paswword } = this.state;

    fetch('http://api.ifreethink.net/Z1515051002/update.php',{
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
        body: JSON.stringify({
          id: id,
          nim: Nim,

      })
    }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { id, name} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={Name}
          onChangeText={TextInputValue => this.setState({
            Id: id,
            Name: TextInputValue
          })}
          placeholderTextColor="#9E9E9E"
        />

            <TouchableOpacity activeopacity={4} style={styles.button} onPress={this.EditUsers}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 45,
    marginRight: 45
  },
  inputBox: {
    width: 250,
    backgroundColor: '#D7CCC8',
    borderRadius: 25,
    paddingHorizontal: 13,
    fontSize: 16,
    color: '#9E9E9E',
    marginVertical: 5,
    padding: 5
  },
  button: {
    width: 250,
    backgroundColor: '#795548',
    borderRadius: 25,
    marginVertical: 3,
    paddingVertical: 7
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  }
});