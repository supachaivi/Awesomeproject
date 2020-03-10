import React, { Component } from 'react';
import { Platform, TextInput, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableHighlight, Image, Button } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import { Actions } from 'react-native-router-flux';

const button = require('../src/button.png');

export default class StockScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            isLoading: true,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    // onPressRegister() {
    //     const { email, first_name, last_name, phone } = this.state;
    //     const payload = { email, first_name, last_name, phone };
    //     console.log(payload);
    //     APIKit.post('/accounts/register/', payload)
    //         .then(function (response) {
    //             console.log(response, Actions.staff())
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        return (
            <SafeAreaView style={styles.safeArea}>
                <SideMenu
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenuState(isOpen)}>
                    <View style={styles.container}>
                        <NavBar style={styles.navbar1}>
                            <NavButton>
                                <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{ marginLeft: -20 }} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    Staff
                                </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>
                        <View style={styles.container1}>
                            <TextInput
                                style={styles.input}
                                placeholder='First name'
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                onChangeText={val => this.onChangeText('first_name', val)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Last name'
                                secureTextEntry={true}
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                onChangeText={val => this.onChangeText('last_name', val)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Phone'
                                secureTextEntry={true}
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                onChangeText={val => this.onChangeText('phone', val)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='E-mail'
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                onChangeText={val => this.onChangeText('email', val)}
                            />
                        </View>


                        <View style={styles.itemContainer}>
                            <Button
                                onPress={() => Actions.staff()}

                                title="Add Staff"
                                color="#c53c3c"
                            />
                        </View>
                    </View>
                </SideMenu>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },

    navbar1: {
        backgroundColor: 'black'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 350,
        height: 55,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 8,
        color: 'gray',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container1: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

});