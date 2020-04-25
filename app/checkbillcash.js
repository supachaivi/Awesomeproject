import React, { Component } from 'react';
import { Platform, View, Button, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
// import Stars from 'react-native-stars';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCode from 'react-native-qrcode-svg';
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
// import APIKit from './APIKit';
// import axios from 'axios'
import APIKit from './APIKit';

export default class CheckbillcashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
            review_text: '',
            valueForQRCode: '250',
            starCount: 2,
        };
    }

    // componentDidMount() {
    //     APIKit.get('/accounts/logout/');
    //   }

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
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    onPressReview() {
        const { starCount, review_text } = this.state;
        const payload = {starCount, review_text };
        console.log(payload)
        APIKit.get('/accounts/logout/');
        APIKit.post('/review/', payload)
        .then(response => {console.log(response),Actions.slider()})
        .catch(error => {console.log(error)});
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
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
                                <Icon2 name="menu" size={30} color={'gray'} onPress={this.toggle} style={{ marginLeft: -20 }} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    Check Bill
                            </Text>
                            </NavTitle>
                            <NavButton>

                            </NavButton>
                        </NavBar>
                        <View>
                            <Text style={styles.text}>
                                สาขา:
                            </Text>
                            <Text style={styles.text}>
                                วันที่/เวลา:
                            </Text>
                            <Text style={styles.text}>
                                โต็ะ:
                            </Text>
                            <Text style={styles.text}>
                                จำนวนลูกค้า:
                            </Text>
                            <Text style={styles.text}>
                                จำนวนรายการอาหาร:
                            </Text>
                            <Text numberOfLines={1} style={styles.line}> __________________________________________________________</Text>
                            <Text style={styles.text}>
                                ราคารวม:
                            </Text>
                        </View>
                        <View style={styles.MainContainer}>
                            <QRCode style={{ marginLeft: '40' }}
                                //QR code value
                                value={this.state.valueForQRCode}
                                //size of QR Code
                                size={150}
                                //Color of the QR Code (Optional)
                                color="black"
                                //Background Color of the QR Code (Optional)
                                backgroundColor="white"
                            //Logo of in the center of QR Code (Optional)
                            />
                        </View>

                        <View style={{ alignItems: 'flex-start', marginLeft: 40, marginTop: 20 }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </View>


                        <TextInput style={styles.input}
                            placeholder='Your Comment'
                            autoCapitalize="none"
                            placeholderTextColor='gray'
                            onChangeText={val => this.onChangeText('review_text', val)}
                        />
                        <View style={styles.itemcontainer}>
                            <Button
                                onPress={this.onPressReview.bind(this)}

                                title="Confirm"
                                color="#c53c3c"
                            />
                        </View>


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
    text: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 15,
    },
    line: {
        marginTop: 10,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        margin: 40,
        marginBottom: 15,
        marginTop: 10,
        borderRadius: 5,
        padding: 5,
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
    MainContainer: {
        alignItems: 'center',
        paddingTop: 25,
    },
    itemcontainer: {
        marginLeft: 120,
        marginRight: 120
    }

});