import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import SFNumberPicker from "react-native-sf-numberpicker";
import { Actions } from 'react-native-router-flux';
// import Slide from '../src1/slider'
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Slide/> */}
            </View>
        );
    }
}

class QueueScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text> This is my Queue screen </Text>

                <SFNumberPicker width={200} height={50} style={{ marginLeft: 10 }} maxNumber={20} minNumber={0} onNumberChanged={this.onNumberChange} fontSize={20} />

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.home()}>
                    <Text style={styles.loginText}>Confirm</Text>
                </TouchableHighlight>
            </View>

        );
    }
    onNumberChange = (tag, number) => {
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
            <View style={{ flex: 0.3, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ width: 350, height: 100, backgroundColor: 'red' }} />
                <Text> This is my History screen </Text>


            </View>
        );
    }
}

// const logo = createStackNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//             navigationOptions: {
//                 title: 'HomeScreen',
//                 headerLeft: <ActionBarImage />,
//                 headerStyle: {
//                     backgroundColor: '#e3e3e3',
//                 },
//                 headerTintColor: '#606070',
//             }
//         },
//         Home: {
//             screen: QueueScreen,
//             navigationOptions: {
//                 title: 'QueueScreen',
//                 headerLeft: <ActionBarImage />,
//                 headerStyle: {
//                     backgroundColor: '#e3e3e3',
//                 },
//                 headerTintColor: '#606070',
//             }
//         },
//         Home: {
//             screen: HistoryScreen,
//             navigationOptions: {
//                 title: 'HistoryScreen',
//                 headerLeft: <ActionBarImage />,
//                 headerStyle: {
//                     backgroundColor: '#e3e3e3',
//                 },
//                 headerTintColor: '#606070',
//             }
//         },
//         Home: {
//             screen: AccountScreen,
//             navigationOptions: {
//                 title: 'AcccountScreen',
//                 headerLeft: <ActionBarImage />,
//                 headerStyle: {
//                     backgroundColor: '#e3e3e3',
//                 },
//                 headerTintColor: '#606070',
//             }
//         },
//     }

// );

const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={25} color={tintColor} />
                )
            }
        },
        Queue: {
            screen: QueueScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="group" size={25} color={tintColor} />
                )
            }
        }, History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="history" size={25} color={tintColor} />
                )
            }
        }, Acccount: {
            screen: AccountScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={25} color={tintColor} />
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#eb6e3d'
        }
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
});

const AppContainer = createAppContainer(bottomTabNavigator);