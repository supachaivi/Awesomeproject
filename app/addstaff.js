import React, { Component } from 'react';
import { Platform, TextInput, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableHighlight, Image, Button } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import { Actions } from 'react-native-router-flux';
import APIKit from './APIKit';

export default class StockScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            code: '',
            position: '',
            is_staff: true,
            is_admin: true,
            isLoading: true,
        };
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    componentDidMount() {
        APIKit.get('/accounts/logout/');
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

    onPressAddstaff() {
        const { username, first_name, last_name, email, phone, code, position, is_staff, is_admin, password, confirm_password } = this.state;
        const payload = { username, first_name, last_name, email, phone, code, position, is_staff, is_admin, password, confirm_password };
        console.log(payload)

        APIKit.post('/accounts/registerstaff/', payload)
            .then(response => { console.log(response), Actions.staff() })
            .catch(error => { console.log(error) });
    }

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
                        <ScrollView>
                            <View style={styles.container1}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Username'
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('username', val)}
                                />
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
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('last_name', val)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='E-mail'
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('email', val)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Phone'
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('phone', val)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Position'
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('position', val)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    secureTextEntry
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('password', val)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Comfirm password'
                                    secureTextEntry
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={val => this.onChangeText('confirm_password', val)}
                                />



                            </View>


                            <View style={styles.itemContainer}>
                                <Button
                                    onPress={this.onPressAddstaff.bind(this)}

                                    title="Add Staff"
                                    color="#c53c3c"
                                />
                            </View>
                        </ScrollView>

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
        marginBottom: 30,
        marginTop:10
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
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }

});