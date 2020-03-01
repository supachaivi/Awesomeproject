import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIKit from './APIKit';
export default class Forgot extends React.Component {
  state = {
    email: '',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { email } = this.state
    try {
      // here place your signup logic
      console.log('paaword will be sent to your E-mail ', success)
    } catch (err) {
      console.log('not found this E-mail ', err)
    }
  }

  onPressFogot() {
    const { email } = this.state;
    const payload = { email };
    console.log('payload');
    APIKit.post('/accounts/forgetpassword/' , payload).then(function(response){
      console.log(response,Actions.login())
    })
    .catch(function(error){
      console.log(error);
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <Button
          title='Confirm'
          onPress={this.onPressFogot.bind(this)}
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