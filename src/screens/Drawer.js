import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999'
  }
})