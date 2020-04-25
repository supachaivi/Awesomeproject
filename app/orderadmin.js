import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableHighlight, Image, Button } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import APIKit from './APIKit';
import { Actions } from 'react-native-router-flux';
import { colors } from './styles/index.style';
import Icon2 from "react-native-vector-icons/Entypo";





export default class OrderadminScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
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
                                    Order
                                </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>

                    </View>
                </SideMenu>
            </SafeAreaView>



        )
    }
}

const styles = StyleSheet.create({
    smallItemContainer: {
        marginBottom: 5,
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    line: {
        color: 'gray',
        alignSelf: 'center',
        // marginBottom: 20
    },
    navbar1: {
        backgroundColor: 'black'
    },
    // btn: {
    //     borderRadius: 5,
    //     padding: 10,
    // },
    icon: {
        marginTop: -15,
        marginLeft: -25,
        marginRight: -20,
        width: 50,
        height: 50,
        tintColor: 'red',
    },
    liked: {
        tintColor: '#84ff00',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
