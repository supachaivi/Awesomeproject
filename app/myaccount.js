import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Image } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Entypo";
import { colors } from './styles/index.style';
import Icon from "react-native-vector-icons/AntDesign";

export default class MyaccountScreen extends React.Component {
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
                                    My Account
                            </Text>
                            </NavTitle>
                            <NavButton>
                                
                            </NavButton>
                        </NavBar>
                        <View style={styles.container1}>
                            <View style={[styles.view, styles.withBorderRadius]}>
                                <Image style={styles.image} source={require('../src/start.png')} />
                                <Text style={styles.text}>250</Text>
                                <Text style={styles.text}>Earned Points</Text>
                            </View>
                            <View style={[styles.view, styles.withBorderRadius]}>
                                <Image style={styles.image} source={require('../src/medal.jpg')} />
                                <Text style={styles.text}>Silver</Text>
                                <Text style={styles.text}>Membership</Text>
                            </View>
                        </View>
                        <Text style={styles.text1}>Redeem</Text>
                        <Text style={styles.text2}>{'\u2B24'}   Customer will be able to redeem pointon bills</Text>
                        <Text style={styles.text2}>{'\u2B24'}   10 point = ฿1.00</Text>
                        <Text numberOfLines={1} style={styles.line}> __________________________________________________________</Text>
                        <Text style={styles.text1}>Event Points</Text>
                        <Text style={styles.text3}>My Points : 250</Text>
                        <Text style={styles.text2}>10 point = ฿1.00</Text>

                    </View>
                </SideMenu>
            </SafeAreaView >

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
        width: 160,
        height: 160,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        // justifyContent: "flex-start",

    },
    withBorderRadius: {
        borderRadius: 20,
        /* the same is ofr the borderBottomRight/Left */
    },
    container1: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    image: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    text: {
        alignSelf: 'center'
    },
    text1: {
        marginTop: 35,
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 40
    },
    text2: {
        marginTop: 20,
        color: 'black',
        fontSize: 13,
        marginLeft: 60
    },
    line: {
        marginTop: 20,
        alignSelf: 'center'
    },
    text3: {
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 60
    },

});