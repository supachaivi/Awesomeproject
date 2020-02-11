import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import SFNumberPicker from "react-native-sf-numberpicker";
import { Actions } from 'react-native-router-flux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
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
            <View style={{ flex: 1 }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Home
                            </Text>
                    </NavTitle>
                </NavBar>
                <ScrollView
                    style={styles.scrollview}
                    scrollEventThrottle={200}
                    directionalLockEnabled={true}
                >
                    <Card>
                        <CardImage
                            source={require('../src/1.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/2.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/3.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/4.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/5.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/6.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/7.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage
                            source={require('../src/8.jpg')}
                        // title="Above all i am here"
                        />
                        <CardTitle
                            title="This is a title"
                            subtitle="This is subtitle"
                        />
                        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Push"
                                color="blue"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Later"
                                color="blue"
                            />
                        </CardAction>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

class QueueScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around' }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Queue
                            </Text>
                    </NavTitle>
                </NavBar>
                <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                    < SFNumberPicker width={200} height={50} style={{ marginLeft: 10 }} maxNumber={20} minNumber={0} onNumberChanged={this.onNumberChange} fontSize={20} />
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.home()}>
                        <Text style={styles.loginText}>Confirm</Text>
                    </TouchableHighlight>

                </View>


            </View>

        );
    }
    onNumberChange = (tag, number) => {
    }
}

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            History
                            </Text>
                    </NavTitle>
                </NavBar>
            </View>
        );
    }
}
class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Account
                            </Text>
                    </NavTitle>
                </NavBar>

                <View style={{ height: 100, backgroundColor: 'red', alignItems: 'space-around' }} />


            </View>
        );
    }
}

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