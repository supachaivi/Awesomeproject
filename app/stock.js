import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableHighlight, Image, Button } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import { Actions } from 'react-native-router-flux';
import APIKit from './APIKit';


export default class StockScreen extends React.Component {
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
            stock: []
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
        APIKit.get('/stock/stock/').then((response) => {
            const stock = response.data.results
            this.setState({ stock })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
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
                                    Stock
                                </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <Text style={{ fontSize: 15 }}>ลำดับ</Text>
                            <Text style={{ fontSize: 15 }}>รายการวัตถุดิบ</Text>
                            <Text style={{ fontSize: 15 }}>จำนวนที่เหลือ</Text>
                            <Text style={{ fontSize: 15 }}>หน่วย</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>
                        {this.state.stock.map((checkstock) => {
                            return (
                                // <View style={{ flexDirection: 'row',marginTop: 20, justifyContent: 'space-around'}}>

                                //         <Text style={{ fontSize: 15 }}>{checkstock.id}</Text>
                                //         <Text style={{ fontSize: 15 }}>{checkstock.material_name}</Text>
                                //         <Text style={{ fontSize: 15 }}>{checkstock.quantity_material}</Text>
                                //         <Text style={{ fontSize: 15 }}>กิโลกรัม</Text>

                                // </View>
                                <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 15, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'column', marginTop: 20, }}>

                                        <Text style={{ fontSize: 15 }}>{checkstock.id}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'column', marginTop: 20, marginLeft: 10, }}>

                                        <Text style={{ fontSize: 15 }}>{checkstock.material_name}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'column', marginTop: 20, marginRight: -50 }}>

                                        <Text style={{ fontSize: 15 }}>{checkstock.quantity_material}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'column', marginTop: 20,  }}>

                                        <Text style={{ fontSize: 15 }}>กิโลกรัม</Text>

                                    </View>
                                </View>

                            )
                        }
                        )}
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