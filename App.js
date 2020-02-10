import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import login from './app/login';
import register from './app/register';
import forgot from './app/forgot';
import home from './app/home';
import slider from './app/slider';

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
        <Scene
          key="home"
          component={home}
          hideNavBar
          
        />
         <Scene
          key="slider"
          component={slider}
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;