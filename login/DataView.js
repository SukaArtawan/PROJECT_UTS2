import React from 'react';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';

export default class DataView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false
    };
  }


    componentDidMount() {
      this.makeRemote();
    }

    makeRemote = () => {
      fetch('http://api.ifreethink.net/Z1515051002/view_data.php')
      .then((result) => result.json())
      .then((res) => {
        this.setState({
          data: res,
          logo: 'a',
          loading: false,
          refreshing: false
        });
      });
    }

    handleRefresh = () => {
      this.setState({
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1,
      }, () => {
        this.makeRemote();
      });
    }

edit = (item) => {
  this.props.navigation.navigate('Updating');
}

    render() {
        return (
          <View style={styles.container}>
            <List style={styles.scene}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                          <ListItem
                            roundAvatar
                            title={item.name}
                            rightIcon={
                              <Entypo
                                name='edit'
                                size={20}
                                onPress={() => this.edit(item)}
                              />
                            }
                            avatar={{ uri: this.state.logo }}
                          />

                        )}
                    keyExtractor={(item) => item.email}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    />
            </List>

          </View>

        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#BDBDBD',
      flex: 1,
      flexDirection: 'column'
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    box1: {
      flex: 4,
      backgroundColor: '#795548',
      justifyContent: 'center',
      alignItems: 'center'

    },
    scene: {
        flex: 1,
        paddingTop: 5,
    },
    user: {
        width: '100%',
        backgroundColor: '#333',
        marginBottom: 10,
        paddingLeft: 25,
    },
    userName: {
        fontSize: 17,
        paddingVertical: 20,
        color: '#fff'
    }
});
