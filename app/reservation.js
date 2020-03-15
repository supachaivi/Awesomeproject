import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const button = require('../src/button.png');

export default class YourorderScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         mycart: []
    //     };
    // }
    // componentDidMount() {
    //     // APIKit.get('/mycart').then((mycart) => this.setState({mycart}))
    //     // .catch((error) => console.log(error));
    //        }
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
        const likedStyles = this.state.liked ? styles.liked : null;
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
                                    Reservation
                                </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <Text style={{ fontSize: 15 }}>ลำดับ</Text>
                            <Text style={{ fontSize: 15 }}>คิว</Text>
                            <Text style={{ fontSize: 15 }}>จำนวนคน</Text>
                            <Text style={{ fontSize: 15 }}></Text>

                        </View>
                        <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <Text style={{ fontSize: 15 }}>1</Text>
                                <Text style={{ fontSize: 15 }}>07</Text>
                                <Text style={{ fontSize: 15 }}>4</Text>
                                <TouchableOpacity onPress={() => Alert.alert('Queue1')}>
                                    <Image style={styles.icon} source={button}/>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', marginLeft:10,marginRight:10}}>
                                <Text numberOfLines={1} style={styles.line}>____________________________________________________________</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <Text style={{ fontSize: 15 }}>1</Text>
                                <Text style={{ fontSize: 15 }}>07</Text>
                                <Text style={{ fontSize: 15 }}>4</Text>
                                <TouchableOpacity onPress={() => Alert.alert('Queue2')}>
                                    <Image style={styles.icon} source={button}/>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', marginLeft:10,marginRight:10}}>
                                <Text numberOfLines={1} style={styles.line}>____________________________________________________________</Text>
                            </View>
                        </View>
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
        marginBottom: 20
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

});