import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import APIKit from './APIKit';


export default class OrderScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
            bill: []
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
        APIKit.get('/mycart/mycart/').then((response) => {
            const bill = response.data.results
            console.log(bill)
            this.setState({ bill })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
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
                        <NavBar>
                            <NavButton>
                                <Icon2 name="menu" size={30} color={'gray'} style={{ justifyContent: 'flex-start' }} onPress={this.toggle} style={{ marginLeft: -20 }} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    Bill
                            </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>
                        <View style={{ margin: 25 }}>
                            <Text style={{ fontSize: 17 }}>Table 1</Text>
                        </View>
                        {this.state.bill.map((listbill) => {
                            // var total = 0;
                            // var total = total + (listorder.food_menu.price * listorder.quantity);
                            return (
                                <View style={{ flexDirection: 'row', marginBottom: 15, fontSize: 15 }}>
                                    <Text style={{ flexDirection: 'column', marginLeft: 50 }}>
                                        - {listbill.food_menu.menu_name}
                                    </Text>
                                    <Text style={{ flexDirection: 'column', marginLeft: 30, fontSize: 15 }}>
                                        {listbill.quantity}
                                    </Text>
                                    <Text style={{ flexDirection: 'column', marginLeft: 30, fontSize: 15 }}>
                                        {listbill.food_menu.price * listbill.quantity}
                                    </Text>
                                    {/* <Text>{total}</Text> */}

                                </View>
                            )

                        })}

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
});