import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import { TouchableHighlight } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import APIKit from './APIKit';
import axios from 'axios';


const button = require('../src/button.jpg');

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
            reservation: []
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

    componentDidMount() {
        APIKit.get('/reservation/reservation/').then((response) => {
            const reservation = response.data.results
            this.setState({ reservation })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }

    onPressQueue() {
        // APIKit.get('/accounts/logout/'),
        axios.delete('http://192.168.1.36:8000/api/reservation/reservation/{id}/?id=checkreservation.id')
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) })
    }

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
                        {this.state.reservation.map((checkreservation) => {
                            return (
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                        <Text style={{ fontSize: 15, marginLeft: 10 }}>{checkreservation.id}</Text>
                                        <Text style={{ fontSize: 15, marginLeft: 20 }}>{checkreservation.queue}</Text>
                                        <Text style={{ fontSize: 15, marginLeft: 30 }}>{checkreservation.quantity}</Text>
                                        {/* <TouchableHighlight onPress={() => Alert.alert('Queue' + checkreservation.queue)}>
                                            <Image style={styles.icon} source={button} />
                                        </TouchableHighlight> */}
                                        <Button
                                            onPress={this.onPressQueue.bind(this)}

                                            title="OK"
                                            color="#c53c3c"
                                        />

                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                                        <Text numberOfLines={1} style={styles.line}>____________________________________________________________</Text>
                                    </View>
                                </View>

                            )
                        }
                        )}



                    </View>
                </SideMenu>
            </SafeAreaView >

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
        marginTop: -10,
        marginLeft: -15,
        marginRight: -20,
        width: 60,
        height: 35,
        // tintColor: 'red',
    },
    liked: {
        tintColor: '#84ff00',
    },

});