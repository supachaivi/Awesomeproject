import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default class CheckbillScreen extends React.Component {
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
                        <NavBar>
                            <NavButton>
                                <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{marginLeft: -20}} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    Check Bill
                            </Text>
                            </NavTitle>
                            <NavButton>
                                
                            </NavButton>
                        </NavBar>
                        <View style={styles.container1}>
                            <TouchableOpacity onPress={() => Actions.checkbillcash()}>
                                <View style={[styles.view, styles.withBorderRadius]}>
                                    <Icon style={styles.icon} name="cash-usd" size={80} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.checkbillcash()}>
                                <View style={[styles.view, styles.withBorderRadius]}>
                                    <Icon1 style={styles.icon1} name="creditcard" size={70} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.checkbillcash()}>
                                <View style={[styles.view, styles.withBorderRadius]}>
                                    <Icon style={styles.icon2} name="qrcode-scan" size={60} />
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.container2}>
                            <Text style={styles.text}>Cash</Text>
                            <Text style={styles.text1}>Credit Card</Text>
                            <Text style={styles.text2}>QR Code</Text>

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
    view: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,

    },
    withBorderRadius: {
        borderRadius: 20,
    },
    container1: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    container2: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    icon1: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 5
    },
    icon2: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    text: {
        marginLeft: 70

    },
    text1: {
        marginLeft: 70
    },
    text2: {
        marginLeft: 60
    }


});