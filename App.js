import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import login from './app/login';
import register from './app/register';
import forgot from './app/forgot';
import home from './app/home';
import slider from './app/slider';
import order from './app/order'
import menu from './app/menu'
import mycart from './app/mycart'
import fooddetail from './app/fooddetail'

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
          
        />
         <Scene
          key="slider"
          component={slider}
          hideNavBar
          initial
        />
         <Scene
          key="order"
          component={order}
          hideNavBar
        />
         <Scene
          key="menu"
          component={menu}
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
      </Scene>
    </Router>
  );
}

export default App;