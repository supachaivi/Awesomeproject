import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
// import APIKit from './APIKit';
export default class SignUp extends React.Component {
  state = {
    username: '', password: '', confirm_password: '', email: '', first_name: '', last_name: '', phone: '', isLoading: true,
  }


  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onPressRegister() {
    const { username, password, confirm_password, email, first_name, last_name, phone } = this.state;
    const payload = { username, password, confirm_password, email, first_name, last_name, phone };
    console.log(payload);
    axios.post('http://161.246.5.195:8000/api/accounts/register/', payload)
    .then(function(response){
      console.log(response,Actions.login())
    })
    .catch(function(error){
      console.log(error);
    })
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('username', val)}
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
          placeholder='Confirm Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('confirm_password', val)}
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
        <Button
          title='Sign Up'
          onPress={this.onPressRegister.bind(this)}
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