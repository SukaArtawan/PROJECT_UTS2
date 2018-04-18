import React from 'react';
import {
  StyleSheet,
  View
  } from 'react-native';
import {StackNavigator} from 'react-navigation';

import Home from './src/login/Home';
import Login from './src/login/Logins';
import Daftar from './src/login/Daftar';
import DataView from './src/login/DataView';
import DataUpdate from './src/login/DataUpdate';
import Info from './src/login/Info';
import Profile from './src/login/Profile';
import Updating from './src/login/Updating';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export const AppNavigator = StackNavigator({
  Home:{screen: Home,
    navigationOptions:{
      header:null
    }
  },
  Login:{ screen: Login,
    navigationOptions:{
      title:'Login',
      header:null
    }
  },
  Profile:{
    screen:Profile
  },
  Daftar:{
    screen : Daftar,
    navigationOptions:{
      title:'Daftar Akun',
      header:null
    }
  },
  DataView :{screen: DataView,
  navigationOptions:{
    title:'Data User'
    }
  },
  DataUpdate:{
    screen: DataUpdate
  },
  Info:{
    screen:Info,
    navigationOptions:{
      title:'Info'
    }
  },
  Updating:{
    screen:Updating,
    navigationOptions:{
      title:'Update Data'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
