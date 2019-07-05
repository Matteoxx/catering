import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Navigation} from 'react-native-navigation';

import { goHome } from '../navigation';
import { USER_KEY } from '../config';

export default class SignIn extends React.Component {

  state = {
    username: '', password: ''
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  signIn = async () => {
    const { username } = this.state
    try {
       // login with provider
       const user = await AsyncStorage.setItem(USER_KEY, username)
       console.log('user successfully signed in!', user)
       goHome()
    } catch (err) {
      console.log('error:', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Zaloguj się'
          onPress={this.signIn}
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'SignUp',
              }
            });
          }}
          title="Zarejestruj się"
        />
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
  input: {
    width: 350,
    fontSize: 18,
    height: 55,
    borderColor: '#42A5F5',
    borderWidth: 1,
    margin: 10,
    padding: 8,
    borderRadius: 14
  }
 
})