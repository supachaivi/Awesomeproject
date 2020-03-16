import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import login from './app/login';
import register from './app/register';
import forgot from './app/forgot';
import home from './app/home';
import home1 from './app/home1';
import home2 from './app/home2';
import home3 from './app/home3';
import home4 from './app/home4';
import home5 from './app/home5';

import slider from './app/slider';
import slider1 from './app/slider1';
import slider2 from './app/slider2';
import slider3 from './app/slider3';
import slider4 from './app/slider4';
import slider5 from './app/slider5';


import order from './app/order';
import menubar from './app/menubar';
import mycart from './app/mycart';
import fooddetail from './app/fooddetail';
import Menu from './app/Menu';
import myaccount from './app/myaccount';
import checkbill from './app/checkbill';
import feedback from './app/feedback'
import checkbillcash from './app/checkbillcash'
import uploadimg from './app/uploadimg'
import about from './app/about'
import yourorder from './app/yourorder'
import reservation from './app/reservation'
import staff from './app/staff'
import addstaff from './app/addstaff'
import stock from './app/stock'
import bill from './app/bill'
import checkfeedback from './app/checkfeedback'
import review from './app/review'
import uploadimage from './app/uploadimage'
import notification from './app/notification'




const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="notification"
          component={notification}
          hideNavBar
        // initial
        />
        <Scene
          key="uploadimage"
          component={uploadimage}
          hideNavBar
        // initial
        />
        <Scene
          key="login"
          component={login}
          hideNavBar
          initial
        />
        <Scene
          key="review"
          component={review}
          hideNavBar
        // initial
        />
        <Scene
          key="register"
          component={register}
        // initial
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
          key="home1"
          component={home1}
          hideNavBar
        // initial

        />
        <Scene
          key="home2"
          component={home2}
          hideNavBar
        // initial

        />
        <Scene
          key="home3"
          component={home3}
          hideNavBar
        // initial

        />
        <Scene
          key="home4"
          component={home4}
          hideNavBar
        // initial

        />
        <Scene
          key="home5"
          component={home5}
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
          key="slider1"
          component={slider1}
          hideNavBar
        // initial
        />
        <Scene
          key="slider2"
          component={slider2}
          hideNavBar
        // initial
        />
        <Scene
          key="slider3"
          component={slider3}
          hideNavBar
        // initial
        />
        <Scene
          key="slider4"
          component={slider4}
          hideNavBar
        // initial
        />
        <Scene
          key="slider5"
          component={slider5}
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
        // initial
        />
        <Scene
          key="checkbillcash"
          component={checkbillcash}
          hideNavBar
        // initial
        />
        <Scene
          key="uploadimg"
          component={uploadimg}
          hideNavBar
        // initial
        />
        <Scene
          key="about"
          component={about}
          hideNavBar
        // initial
        />
        <Scene
          key="yourorder"
          component={yourorder}
          hideNavBar
        // initial
        />
        <Scene
          key="reservation"
          component={reservation}
          hideNavBar
        // initial
        />
        <Scene
          key="staff"
          component={staff}
          hideNavBar
        // initial
        />
        <Scene
          key="addstaff"
          component={addstaff}
          hideNavBar
        // initial
        />
        <Scene
          key="stock"
          component={stock}
          hideNavBar
        // initial
        />
        <Scene
          key="bill"
          component={bill}
          hideNavBar
        // initial
        />
        <Scene
          key="checkfeedback"
          component={checkfeedback}
          hideNavBar
        // initial
        />
      </Scene>
    </Router>
  );
}

export default App;