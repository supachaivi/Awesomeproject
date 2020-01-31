import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import login from './app/login';
import register from './app/register';
import forgot from './app/forgot';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={login}
          hideNavBar
          initial
        />
        <Scene
          key="register"
          component={register}
        />
        <Scene
          key="forgot"
          component={forgot}
        />
      </Scene>
    </Router>
  );
}

export default App;