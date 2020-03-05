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

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

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
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Your Order
      </Text>
      <Text
        onPress={() => Actions.checkbill()}
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
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        About
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};