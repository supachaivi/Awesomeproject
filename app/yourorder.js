import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Button } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import APIKit from './APIKit';
import { Actions } from 'react-native-router-flux'

export default class MycartScreen extends React.Component {
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
            myorder: [],
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
            const myorder = response.data.order_list
            const total = response.data.total_price
            console.log(myorder)
            this.setState({ myorder })
            this.setState({ total })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }

    render() {
        const myorder = this.state.myorder
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        const total = this.state.total
        if (myorder != null) {
            return (
                <SafeAreaView style={styles.safeArea}>
                    <SideMenu
                        menu={menu}
                        isOpen={this.state.isOpen}
                        onChange={isOpen => this.updateMenuState(isOpen)}>
                        <View style={styles.container}>
                            <NavBar>
                                <NavButton>
                                    <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{ marginLeft: -20 }} />
                                </NavButton>
                                <NavTitle>
                                    <Text>
                                        Your order
                                </Text>
                                </NavTitle>
                                <NavButton>

                                </NavButton>
                            </NavBar>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginRight: 30 }}>
                                {/* <Text style={{ fontSize: 15 }}>ลำดับ</Text> */}
                                <Text style={{ fontSize: 15 }}>รายการอาหาร</Text>
                                <Text style={{ fontSize: 15 }}>จำนวน</Text>
                                <Text style={{ fontSize: 15 }}>ราคา</Text>
                            </View>
                            <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>
                            {this.state.myorder.map((checkmyorder) => {
                                return (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        {/* <View style={{ flexDirection: 'column', marginTop: 20 }}>

                                        <Text style={{ fontSize: 15 }}>{checkmyorder.id}</Text>

                                    </View> */}
                                        <View style={{ flexDirection: 'column', marginTop: 20 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmyorder.food_name}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 10 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmyorder.quantity}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 30 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmyorder.price}</Text>

                                        </View>
                                    </View>

                                )
                            }

                            )}
                            <View>
                                <Text style={{ marginLeft: 120, marginTop: 300 }}> Total price :    {total}  บาท</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Button
                                    onPress={() => Actions.checkbillcash()}
                                    title="Check bill"
                                    color="#c53c3c"
                                />
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
                                    <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{ marginLeft: -20 }} />
                                </NavButton>
                                <NavTitle>
                                    <Text>
                                        Your order
                                </Text>
                                </NavTitle>
                                <NavButton>

                                </NavButton>
                            </NavBar>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginRight: 30 }}>
                                {/* <Text style={{ fontSize: 15 }}>ลำดับ</Text> */}
                                <Text style={{ fontSize: 15 }}>รายการอาหาร</Text>
                                <Text style={{ fontSize: 15 }}>จำนวน</Text>
                                <Text style={{ fontSize: 15 }}>ราคา</Text>
                            </View>
                            <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>
                            {/* {this.state.myorder.map((checkmyorder) => {
                                return (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'column', marginTop: 20 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmyorder.food_name}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 10 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmyorder.quantity}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 30 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmyorder.price}</Text>

                                        </View>
                                    </View>

                                )
                            }

                            )}
                            <View>
                                <Text style={{ marginLeft: 120, marginTop: 300 }}> Total price :    {total}  บาท</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Button
                                    onPress={() => Actions.checkbillcash()}
                                    title="Check bill"
                                    color="#c53c3c"
                                />
                            </View> */}
                        </View>
                    </SideMenu>
                </SafeAreaView>

            )
        }

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
        alignSelf: 'center'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10
    },


});