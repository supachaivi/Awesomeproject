import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Button, Alert } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import APIKit from './APIKit';
import { Actions } from 'react-native-router-flux';


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
            mycart: [],
            order_list: []
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
            // const mycart = response.data
            const order_list = response.data.order_list
            // console.log(mycart.order_list)
            // this.setState({ mycart })
            this.setState({ order_list })
            console.log(order_list)
            // console.log(this.state.mycart)
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }

    render() {
        const order_list = this.state.order_list;
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        if (order_list != null) {
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
                                        My Cart
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
                            {this.state.order_list.map((checkmycart) => {
                                console.log(checkmycart)
                                return (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        {/* <View style={{ flexDirection: 'column', marginTop: 20 }}>

                                        <Text style={{ fontSize: 15, marginLeft: 40 }}>{checkmycart.id}</Text>

                                    </View> */}
                                        <View style={{ flexDirection: 'column', marginTop: 20 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmycart.food_name}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 10 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmycart.quantity}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 30 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmycart.price}</Text>

                                        </View>
                                    </View>

                                )
                            }
                            )}
                            <View style={styles.itemContainer}>
                                <Button
                                    onPress={() => Actions.slider()}

                                    title="Confirm order"
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
                                        My Cart
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
                            {/* {this.state.order_list.map((checkmycart) => {
                                console.log(checkmycart)
                                return (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'column', marginTop: 20 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmycart.food_name}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 10 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmycart.quantity}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 30 }}>

                                            <Text style={{ fontSize: 15 }}>{checkmycart.price}</Text>

                                        </View>
                                    </View>

                                )
                            }
                            )}
                            <View style={styles.itemContainer}>
                                <Button
                                    onPress={() => Actions.slider()}

                                    title="Confirm order"
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