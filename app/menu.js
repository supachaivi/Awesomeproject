import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/AntDesign";

export default class OrderScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Menu
                        </Text>
                    </NavTitle>
                </NavBar>
                <View style={styles.container}>
                    <Icon3 name="book" size={60} />
                    <Icon name="user" size={60} />
                    <Icon2 name="list-ordered" size={60} />
                </View>

                <View style={styles.container2}>
                    <Icon1 name="feedback" size={60} />
                    <Icon1 name="home" size={60} />
                    <Icon name="search-plus" size={60} />
                </View>
                <View style={styles.container3}>
                    <Icon name="money" size={60} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
