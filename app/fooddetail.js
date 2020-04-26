import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Dimensions, Image, Button, Alert, AsyncStorage } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
// import { SimpleStepper } from 'react-native-simple-stepper';
// import SFNumberPicker from "react-native-sf-numberpicker";
import { Actions } from 'react-native-router-flux';
import NumericInput from 'react-native-numeric-input'
import APIKit, { setClientToken } from './APIKit';


const screenWidth = Dimensions.get('window').width;

class FoodDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    // onPressMenu() {
    //     const { username, password } = this.state;
    //     const payload = { username, password };
    //     console.log(payload);

    //     const onSuccess = ({ data }) => {
    //         Actions.slider()
    //         // Actions.pop()
    //         // Set JSON Web Token on success
    //         setClientToken(data.token);
    //         // this.setState({ isLoading: false, isAuthorized: true });
    //     };

    //     const onFailure = error => {
    //         console.log(error.response.data);
    //         this.setState({ errors: error.response.data, isLoading: false });
    //     };

    //     // Show spinner when call is made
    //     this.setState({ isLoading: true });
    //     APIKit.post('/accounts/login/', payload)
    //         .then(onSuccess)
    //         .catch(onFailure);
    // }

    componentDidMount() {
        APIKit.get('/accounts/logout/');
    }

    render() {
        const { image } = this.props
        const { value } = this.state
        const token = this.props.token
        console.log(token + 'good')
        return (
            <View>
                <NavBar>
                    <NavTitle>
                        <Text>

                            {image.menu_name}
                        </Text>
                    </NavTitle>
                </NavBar>
                <View style={styles.wrapper}>
                    <Image
                        style={styles.Image}
                        source={{ uri: image.menu_image }}
                    />

                    <View style={styles.smallItemContainer}>
                        <Text style={styles.mainText}>{image.menu_name}</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.priceText}>฿{image.price}</Text>
                    </View>

                    <View style={styles.smallItemContainer}>
                        <Text style={styles.labelText}>How many?</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <NumericInput
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={240}
                            minValue={1}
                            maxValue={10}
                            totalHeight={50}
                            iconSize={25}
                            step={1}
                            valueType='real'
                            rounded
                            textColor='#000000'
                            iconStyle={{ color: 'black' }}
                            rightButtonBackgroundColor='#e8e8e8'
                            leftButtonBackgroundColor='#e8e8e8' />
                    </View>

                    <View style={styles.itemContainer}>
                        <Button
                            onPress={() => {
                                APIKit.post('/mycart/ordertest/', { food_menu: image.id , quantity: value})
                                    .then(response => { console.log(response), Actions.slider() })
                                    .catch(error => { console.log(error) });
                                // console.log(image.id)
                                // Alert.alert(
                                //     'Added to basket',
                                //     `${value} ${image.id} was added to the basket.`)
                                // this.props.navigation.navigate('mycart', { image, value })
                                // Actions.slider()
                                // this.props.navigation.navigate('slider', {image,value})                  
                            }}

                            title="Add to Basket"
                            color="#c53c3c"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        alignItems: 'center',
    },
    Image: {
        width: screenWidth - 20,
        height: 300,
        marginBottom: 10,
        marginTop: 10
    },
    stepperContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        borderColor: '#ccc',
    },
    itemContainer: {
        marginBottom: 25,
    },
    smallItemContainer: {
        marginBottom: 5,
    },
    mainText: {
        fontSize: 20,
        marginBottom: 5,
    },
    subText: {
        fontSize: 14,
        color: '#3a3a3a',
    },
    priceText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    labelText: {
        fontSize: 18,
        color: '#303540',
        marginBottom: 10,
    },
    stepperButton: {
        height: 20,
        width: 20,
    },
    stepperText: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default FoodDetails;