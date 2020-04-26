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
            bill: [],
            total: []
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
        APIKit.get('/mycart/mycarttest/order/').then((response) => {
            const bill = response.data.order_list
            const total = response.data.total_price
            console.log(bill)
            this.setState({ bill })
            this.setState({ total })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }

    render() {
        const total = this.state.total
        const bill = this.state.bill
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        if (bill != null) {
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
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Table 1</Text>
                            </View>
                            {this.state.bill.map((listbill) => {
                                // var total = 0;
                                // var total = total + (listorder.food_menu.price * listorder.quantity);
                                return (
                                    <View style={{ flexDirection: 'row', marginBottom: 15, fontSize: 15 }}>
                                        <Text style={{ flexDirection: 'column', marginLeft: 50 }}>
                                            - {listbill.food_name}
                                        </Text>
                                        <Text style={{ flexDirection: 'column', marginLeft: 25, fontSize: 15 }}>
                                            {listbill.quantity}  ที่
                                    </Text>
                                        <Text style={{ flexDirection: 'column', marginLeft: 25, fontSize: 15 }}>
                                            {listbill.price}   บาท
                                    </Text>
                                        {/* <Text>{total}</Text> */}

                                    </View>
                                )

                            })}
                            <View>
                                <Text style={{ marginLeft: 50, marginTop: 20 }}> Total price :    {total}  บาท</Text>
                            </View>

                        </View>
                    </SideMenu>
                </SafeAreaView>

            )
        }
        else {
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
                            {/* <View style={{ margin: 25 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Table 1</Text>
                            </View>
                            {this.state.bill.map((listbill) => {
                                return (
                                    <View style={{ flexDirection: 'row', marginBottom: 15, fontSize: 15 }}>
                                        <Text style={{ flexDirection: 'column', marginLeft: 50 }}>
                                            - {listbill.food_name}
                                        </Text>
                                        <Text style={{ flexDirection: 'column', marginLeft: 25, fontSize: 15 }}>
                                            {listbill.quantity}  ที่
                                        </Text>
                                        <Text style={{ flexDirection: 'column', marginLeft: 25, fontSize: 15 }}>
                                            {listbill.price}   บาท
                                        </Text>

                                    </View>
                                )

                            })}
                            <View>
                                <Text style={{ marginLeft: 50, marginTop: 20 }}> Total price :    {total}  บาท</Text>
                            </View> */}

                        </View>
                    </SideMenu>
                </SafeAreaView>

            )
        }

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