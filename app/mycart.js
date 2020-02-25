import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'


export default class OrderScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            My cart
                        </Text>
                    </NavTitle>
                </NavBar>
            </View>
        )
    }
}
