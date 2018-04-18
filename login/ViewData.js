import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ListView,
  ActivityIndicator
  } from 'react-native';

export default class DataUsers extends React.Component{

constructor(props){
  super(props)
  this.state = {
    isLoading: true
  }
}

componentDidMount(){
  return fetch('http://api.ifreethink.net/Z1515051002/view_data.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
        this.setState({
            isLoading:false,
            dataSource: ds.cloneWithRows(responseJson)
        }, function(){})
      }).catch((error) => {
        console.error(error);
      }
    )
}

Action_Click (id, name, phone){
// this.props.navigation.navigate('Thire', {
//   id:id,
//   name:name,
//   email:email,
//   phone:phone
// })
  Alert.alert(name);
}

ListViewItemSeparator = () => {
  return(
    <View
      style = {{
        height:.5,
        width:'100%',
        backgroundColor:'green'
      }}>
    </View>
  )
}

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex:1, paddingTop:20}}>
          <ActivityIndicator/>
        <View/>
      )
    }
    return(
      <View style={styles.container}>
        <ListView
            dataSource = {this.state.dataSource}
            renderSeparator = {this.ListViewItemSeparator}
            renderRow = {(rowData) =>
              <Text style={styles.DataText} onPress = {this.Action_Click.bind(this,
                rowData.id,
                rowData.name,
                rowData.email,
                rowData.phone
              )}>
              {rowData.name}
              </Text>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    marginLeft:5,
    marginRight:5
  },
  DataText:{
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
});





import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ListView,
  ActivityIndicator
  } from 'react-native';

export default class DataUsers extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <Text>Data Users</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    marginLeft:5,
    marginRight:5
  },
  DataText:{
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
});

