import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableHighlight, Image } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';

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
            liked: false,
        };
    }

    _onPressBtn = () => {
        this.setState({
            liked: !this.state.liked,
        });
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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <Text style={{ fontSize: 15 }}>ลำดับ</Text>
                            <Text style={{ fontSize: 15 }}>คิว</Text>
                            <Text style={{ fontSize: 15 }}>จำนวนคน</Text>
                            <Text style={{ fontSize: 15 }}></Text>
                        </View>
                        <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <Text style={{ fontSize: 15 }}>1</Text>
                            <Text style={{ fontSize: 15 }}>07</Text>
                            <Text style={{ fontSize: 15 }}>4</Text>
                            <TouchableHighlight
                                onPress={this._onPressBtn}
                                // style={styles.btn}
                                underlayColor="gary"
                            >
                                <Image
                                    source={button}
                                    style={[styles.icon, likedStyles]}
                                />
                            </TouchableHighlight>
                            
                        </View>
                        <Text numberOfLines={1} style={styles.line}>____________________________________________________________</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <Text style={{ fontSize: 15 }}>2</Text>
                            <Text style={{ fontSize: 15 }}>08</Text>
                            <Text style={{ fontSize: 15 }}>2</Text>
                            <TouchableHighlight
                                onPress={this._onPressBtn}
                                // style={styles.btn}
                                underlayColor="gary"
                            >
                                <Image
                                    source={button}
                                    style={[styles.icon, likedStyles]}
                                />
                            </TouchableHighlight>
                        </View>
                        <Text numberOfLines={1} style={styles.line}>____________________________________________________________</Text>
                    </View>
                </SideMenu>
            </SafeAreaView>

        )
    }

    //     render() {
    //         const { image, value } = this.props
    //         // const {mycart} = this.state
    //         return (
    //             <View style={{ flex: 1 }}>
    //                 <NavBar>
    //                     <NavTitle>
    //                         <Text>
    //                             My cart
    //                         </Text>
    //                     </NavTitle>
    //                 </NavBar>
    //                 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
    //                     <Text style={{ fontSize: 15 }}>ลำดับ</Text>
    //                     <Text style={{ fontSize: 15 }}>รายการอาหาร</Text>
    //                     <Text style={{ fontSize: 15 }}>จำนวน</Text>
    //                     <Text style={{ fontSize: 15 }}>ราคา</Text>
    //                 </View>
    //                 {/* {mycart.map((menu) => {
    //                             return (
    //                                 <Text>menu</Text>
    //                             )
    //                         })} */}
    //                 {/* <View style={styles.smallItemContainer}>
    //                     <Text style={styles.mainText}>{image.name} {value}</Text>
    //                 </View> */}

    //             </View>
    //         )
    //     }
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