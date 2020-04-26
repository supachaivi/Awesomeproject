import React, { Component } from 'react';
import { Platform, TextInput, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableHighlight, Image, Button } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { colors } from './styles/index.style';
import { Actions } from 'react-native-router-flux';
import APIKit from './APIKit';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onPressRegister() {
    const { username, password, confirm_password, email, first_name, last_name, phone } = this.state;
    const payload = { username, password, confirm_password, email, first_name, last_name, phone };
    console.log(payload);
    APIKit.post('/accounts/register/', payload)
      .then(function (response) {
        console.log(response, Actions.login())
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}> 
          <View style={styles.container}>
            <NavBar style={styles.navbar1}>
              <NavTitle>
                <Text>Register</Text>
              </NavTitle>
            </NavBar>
            <ScrollView>
              <View style={styles.container1}>
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
              </View>


              <View style={styles.itemContainer}>
                <Button
                  onPress={this.onPressRegister.bind(this)}

                  title="Sign up"
                />
              </View>
            </ScrollView>

          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
},
container: {
    flex: 1,
    backgroundColor: colors.background1
},

navbar1: {
    backgroundColor: 'black'
},
itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop:10
},
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
container1: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
}
})