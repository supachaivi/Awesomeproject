import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> This is my Home screen </Text>
            </View>
        );
    }
}

class QueueScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> This is my Queue screen </Text>
            </View>
        );
    }
}
class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> This is my History screen </Text>
            </View>
        );
    }
}
class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> This is my Account screen </Text>
            </View>
        );
    }
}

const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Queue: QueueScreen,
        History: HistoryScreen,
        Acccount: AccountScreen,
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(bottomTabNavigator);