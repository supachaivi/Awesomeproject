import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'


export default class OrderScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         mycart: []
    //     };
    // }
    // componentDidMount() {
    //     APIKit.get('/mycart').then((mycart) => this.setState({mycart}))
    //     .catch((error) => console.log(error));
    //   }
    render() {
        const { image, value } = this.props
        // const {mycart} = this.state
        return (
            <View style={{ flex: 1 }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            My cart
                        </Text>
                    </NavTitle>
                </NavBar>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <Text style={{fontSize: 15}}>ลำดับ</Text>
                    <Text style={{fontSize: 15}}>รายการอาหาร</Text>
                    <Text style={{fontSize: 15}}>จำนวน</Text>
                    <Text style={{fontSize: 15}}>ราคา</Text>
                </View>
                {/* {mycart.map((menu) => {
                            return (
                                <Text>menu</Text>
                            )
                        })} */}
                <View style={styles.smallItemContainer}>
                    <Text style={styles.mainText}>{image.name} {value}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    smallItemContainer: {
        marginBottom: 5,
    },

});