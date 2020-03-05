import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import login from './app/login';
import register from './app/register';
import forgot from './app/forgot';
import home from './app/home';
import slider from './app/slider';
import order from './app/order';
import menubar from './app/menubar';
import mycart from './app/mycart';
import fooddetail from './app/fooddetail';
import Menu from './app/Menu';
import myaccount from './app/myaccount';
import checkbill from './app/checkbill';
import feedback from './app/feedback'
import checkbillcash from './app/checkbillcash'




const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={login}
          hideNavBar
        // initial
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
        // initial

        />
        <Scene
          key="slider"
          component={slider}
          hideNavBar
          // initial
        />
        <Scene
          key="order"
          component={order}
          hideNavBar
        />
        <Scene
          key="menubar"
          component={menubar}
          hideNavBar
        />
        <Scene
          key="mycart"
          component={mycart}
          hideNavBar
        />
        <Scene
          key="fooddetail"
          component={fooddetail}
          hideNavBar
        />
        <Scene
          key="menu"
          component={Menu}
          hideNavBar
        />
        <Scene
          key="myaccount"
          component={myaccount}
          hideNavBar
        />
        <Scene
          key="checkbill"
          component={checkbill}
          hideNavBar
        />
        <Scene
          key="feedback"
          component={feedback}
          hideNavBar
        />
        <Scene
          key="checkbillcash"
          component={checkbillcash}
          hideNavBar
          initial
        />
      </Scene>
    </Router>
  );
}

export default App;