import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIKit from './APIKit';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { colors } from './styles/index.style';

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
    APIKit.post('/accounts/forgetpassword/', payload).then(function (response) {
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
          <NavBar>
            <NavTitle>
              <Text>
                ForgotPassword
              </Text>
            </NavTitle>
          </NavBar>

          <TextInput style={styles.input}
            placeholder='E-mail'
            autoCapitalize="none"
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <View style={styles.itemContainer}>
            <Button
              // onPress={() => Actions.checkbillcash()}

              title="Confirm"
            />
          </View>
        </View>
      </SafeAreaView>





    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    padding: 8,
    color: 'gray',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 200,
    marginLeft: 30
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30
  },
})