import React, { Component } from 'react';
import { Image, Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';

export default class AboutScreen extends React.Component {
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
                                <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{ marginLeft: -20 }} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    About
                            </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>
                        <ScrollView
                            style={styles.scrollview}
                            scrollEventThrottle={200}
                            directionalLockEnabled={true}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={styles.accountimage}
                                    // source={require('../src/about1.jpg')}
                                ></Image>
                                <View style={styles.text}>
                                    {/* <Text style={{margin:10}}>ร้าน อ.มัลลิการ์เปิดครั้งแรกเมื่อวันที่ 15 พฤศจิกายน 2537 ซึ่งร้านนี้นอกจากจะเป็นร้านอาหารไทยที่สามารถรองรับลูกค้าได้มากกว่า 120 ท่าน มีเมนูอร่อยให้ลูกค้าเลือกไม่น้อยกว่า 300 รายการ</Text> */}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={styles.blankimage}
                                    // source={require('../src/about2.jpg')}
                                ></Image>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={styles.blankimage}
                                    // source={require('../src/about3.jpg')}
                                ></Image>
                            </View>
                          
                            
                        </ScrollView>
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
    accountimage: {
        marginTop: 25,
        marginBottom: 15,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        width: 180,
        height: 200,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    accountimage1: {
        flex:1,
        marginTop: 5,
        margin: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        // width: 350,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
    },
    text: {
        marginTop: 25,
        marginBottom: 15,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        width: 180,
        height: 200,
        borderRadius: 10,
        alignSelf: 'flex-end',
    },
    blankimage: {
        flex: 1,
        marginTop: 5,
        margin: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        // width: 350,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
    },

});