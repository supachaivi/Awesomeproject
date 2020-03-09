import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';

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
                                <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{marginLeft: -20}} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    Your Order
                                </Text>
                            </NavTitle>
                            <NavButton>
                                
                            </NavButton>
                        </NavBar>
                        <View style={{  flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <Text style={{ fontSize: 15 }}>ลำดับ</Text>
                            <Text style={{ fontSize: 15 }}>รายการอาหาร</Text>
                            <Text style={{ fontSize: 15 }}>จำนวน</Text>
                            <Text style={{ fontSize: 15 }}>ราคา</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>
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
        alignSelf: 'center'
    },
    navbar1: {
        backgroundColor: 'black'
    }

});