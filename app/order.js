import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Icon from "react-native-vector-icons/FontAwesome";

export default class OrderScreen extends React.Component {
    render() {
        return (
            <View>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Your Order
                        </Text>
                    </NavTitle>
                    <NavButton>
                        <Icon name="list" size={20} style={{ justifyContent: 'center' }} onPress={() => Actions.menu()} />
                    </NavButton>
                </NavBar>

            </View>
        )
    }
}
