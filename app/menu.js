import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import APIKit from './APIKit';

const window = Dimensions.get('window');
const uri = 'http://192.168.1.35:8000/media/accounts/2020/03/53652956_2072908022777783_78607625322758144_n_Gexwjsz.jpg';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    marginBottom: 15,
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});



export default function Menu({ onItemSelected }) {
  
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Supachai Viriyacharoenkit</Text>
      </View>

      <Text
        onPress={() => Actions.slider()}
        style={styles.item}
      >
        Menu
      </Text>

      <Text
        onPress={() => Actions.myaccount()}
        style={styles.item}
      >
        My Account
      </Text>
      <Text
        onPress={() => Actions.yourorder()}
        style={styles.item}
      >
        Your Order
      </Text>
      <Text
        onPress={() => Actions.checkbillcash()}
        style={styles.item}
      >
        Check Bill
      </Text>
      <Text
        onPress={() => Actions.feedback()}
        style={styles.item}
      >
        Feedback
      </Text>
      <Text
        onPress={() => Actions.about()}
        style={styles.item}
      >
        About
      </Text>
      <Text
        onPress={() => Actions.login()}
        style={styles.item}
      >
        Log out
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};