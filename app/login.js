import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Spinner from 'react-native-loading-spinner-overlay'

import APIKit, { setClientToken } from './APIKit';
const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Login extends Component {
  state = initialState;

  componentDidMount() {
    APIKit.get('/accounts/logout/');
  }

  componentWillUnmount() { }

  onUsernameChange = username => {
    this.setState({ username });
  };

  onPasswordChange = password => {
    this.setState({ password });
  };

  onPressLogin() {
    const { username, password } = this.state;
    const payload = { username, password };
    console.log(payload);

    const onSuccess = ({ data }) => {
      Actions.home()
      // Actions.pop()
      // Set JSON Web Token on success
      setClientToken(data.token);
      // this.setState({ isLoading: false, isAuthorized: true });
    };

    const onFailure = error => {
      console.log(error.response.data);
      this.setState({ errors: error.response.data, isLoading: false });
    };

    // Show spinner when call is made
    this.setState({ isLoading: true });
    APIKit.post('/accounts/login/', payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const { errors } = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.container1}>
        {/* <Spinner visible={isLoading} /> */}
        {!this.state.isAuthorized ?
          <View style={styles.container}>
            <View style={styles.backgroundContainer}>
              <Image style={styles.bakcgroundImage} source={require('../src/lobster.png')} />
            </View>
            <Image source={require('../src/logo.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                value={this.state.username}
                maxLength={256}
                placeholder="Enter username"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={event =>
                  this.passwordInput.wrappedInstance.focus()
                }
                onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />
              {this.getErrorMessageByField('username')}
            </View>



            <View style={styles.inputContainer}>
              <TextInput
                ref={node => {
                  this.passwordInput = node;
                }}
                style={styles.inputs}
                value={this.state.password}
                maxLength={40}
                placeholder="Enter password"
                onChangeText={this.onPasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit
                onSubmitEditing={this.onPressLogin.bind(this)}
                secureTextEntry
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />
              {this.getErrorMessageByField('password')}
            </View>



            {this.getNonFieldErrorMessage()}

            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={this.onPressLogin.bind(this)}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainer1} onPress={() => Actions.forgot()}>
              <Text style={{color: 'white'}}>Forgot your password?</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainer1} onPress={() => Actions.register()}>
              <Text style={{color: 'white'}}>Register</Text>
            </TouchableHighlight>
          </View> : <View><Text>Successfully authorized!</Text></View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignContent: 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: 250,
    borderRadius: 30,
  },
  buttonContainer1: {
    height: 25,
    marginBottom: 20,
    // width: 250,
    // borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',

  },
  logo: {

    width: "47%",
    resizeMode: "contain",
    alignSelf: "center",
    alignContent: "flex-start"
  },
  backgroundContainer: {

    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  bakcgroundImage: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.91
  },
  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: '#fee8e6',
    padding: 8,
    borderRadius: 4,
  },
  errorMessageTextStyle: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Login;