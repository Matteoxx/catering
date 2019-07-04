import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { goToAuth, goHome } from '../navigation';

import { USER_KEY } from '../config';

export default class Initializing extends Component {

  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)
      if (user) {
        goHome()
      } else {
        goToAuth()
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Loading</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 28
  },
})