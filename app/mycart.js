import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'


export default class OrderScreen extends React.Component {
    render() {
        const { image } = this.props
        return (
            <View style={{ flex: 1 }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            My cart
                        </Text>
                    </NavTitle>
                </NavBar>
                <View style={styles.smallItemContainer}>
                    <Text style={styles.mainText}>${this.state.value} ${image.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    smallItemContainer: {
        marginBottom: 5,
    },
   
});