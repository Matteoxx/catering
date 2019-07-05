import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import * as firebase from "firebase";


export default class SignUp extends React.Component {
  state = {
    
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = async () => {

   
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then()
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              // this.onLoginFailure.bind(this)('Weak password!')
              console.log("err");
            } else {
              // this.onLoginFailure.bind(this)(errorMessage)
              console.log("err");
            }
          });
    
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Rejestracja</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('password', val)}
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