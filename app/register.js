import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
export default class SignUp extends React.Component {
  state = {
    first_name: '', last_name: '', phone: '', email: '', password: '', confirm_password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  // signUp = async () => {
  //   const { firstname, lastname, phone, email, password, confirm } = this.state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Firstname'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('first_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Lastname'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('last_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('phone', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('confirm_password', val)}
        />
        <Button
          title='Sign Up'
          onPress={() => {
            axios.post("http://127.0.0.1:8000/api/accounts/register/", {
              first_tname: '',
              last_name: '', 
              phone: '', 
              email: '', 
              password: '', 
              confirm_password: ''
            }).then((response) => {
              console.log(response);
            }).catch(error => {
              console.log(error);
            })
            Actions.login();
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 8,
    color: 'gray',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    backgroundColor: '#DCDCDC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})