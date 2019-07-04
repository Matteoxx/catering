import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Rejestracja</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Załóż konto'
          onPress={this.signUp}
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