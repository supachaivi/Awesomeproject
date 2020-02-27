import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image,StatusBar, ScrollView,SafeAreaView, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import SFNumberPicker from "react-native-sf-numberpicker";
import { Actions } from 'react-native-router-flux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import imagedb from './Imagedb'
import NumericInput from 'react-native-numeric-input'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2, ENTRIES3 } from './static/entries';
import SliderEntry from './components/SliderEntry';
import { colors } from './styles/index.style';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem({ item, index }) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem({ item, index }) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem({ item, index }) {
        return <SliderEntry data={item} even={true} />;
    }

    mainExample(number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>



                {/* <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text> */}
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    // inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <Pagination
                    dotsLength={ENTRIES1.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    momentumExample(number, title) {
        return (
            <View style={styles.exampleContainer}>
                {/* <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text> */}
                <Carousel
                    data={ENTRIES2}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    activeAnimationType={'spring'}
                    activeAnimationOptions={{
                        friction: 4,
                        tension: 40
                    }}
                />
            </View>
        );
    }


    render() {
        const example1 = this.mainExample();
        const example2 = this.momentumExample();

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <NavBar>
                        <NavTitle>
                            <Text >
                                Home
                            </Text>
                        </NavTitle>
                    </NavBar>

                    <StatusBar
                        translucent={true}
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />
                    {this.gradient}
                    <ScrollView
                        style={styles.scrollview}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}
                    >
                        {example1}
                        {imagedb.map((image) => {
                            return (<Card>
                                <CardImage
                                    source={image.src}
                                // title="Above all i am here"
                                />
                                <CardTitle
                                    title={image.name}
                                    subtitle="This is subtitle"
                                />
                                <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                                <CardAction
                                    separator={true}
                                    inColumn={false}>
                                    <CardButton
                                        onPress={() => { this.props.navigation.navigate('fooddetail', { image }); }}
                                        title="Push"
                                        color="blue"
                                    />
                                    <CardButton
                                        onPress={() => { }}
                                        title="Later"
                                        color="blue"
                                    />
                                </CardAction>
                            </Card>)
                        })}
                        {example2}
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

class QueueScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Queue
                            </Text>
                    </NavTitle>
                </NavBar>
                <Image style={styles.restaurantimage} source={require('../src/restaurant.jpg')} />
                <Text style={styles.textinput}>Restaurant Name: Swiftfood</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop: 20,
                    }}
                />
                <Text style={styles.textinput1}>Please enter your seat</Text>
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
                            Alert.alert(
                                'Confirm Queue',
                                `${this.state.value} seat was add to system`)
                            Actions.home()
                        }}

                        title="Comfirm"
                        color="#c53c3c"
                    />
                </View>
            </View>

        );
    }
    onNumberChange = (tag, number) => {
    }
}

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            History
                            </Text>
                    </NavTitle>
                </NavBar>
            </View>
        );
    }
}
class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Account
                            </Text>
                    </NavTitle>
                </NavBar>
                <Image style={styles.accountimage} source={require('../src/account.png')} />
                {/* <View style={{ height: 100, backgroundColor: 'red', alignItems: 'space-around' }} /> */}
                <View style={styles.MainContainer}>
                    <Text style={styles.TextComponentStyle}>First name</Text>
                </View>
                <View style={styles.MainContainer}>
                    <Text style={styles.TextComponentStyle}>Last name</Text>
                </View>
                <View style={styles.MainContainer}>
                    <Text style={styles.TextComponentStyle}>Phone number</Text>
                </View>
                <View style={styles.MainContainer}>
                    <Text style={styles.TextComponentStyle}>E-mail</Text>
                </View>
            </View>
        );
    }
}

const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={25} color={tintColor} />
                )
            }
        },
        Queue: {
            screen: QueueScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="group" size={25} color={tintColor} />
                )
            }
        }, History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="history" size={25} color={tintColor} />
                )
            }
        }, Acccount: {
            screen: AccountScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={25} color={tintColor} />
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#eb6e3d'
        }
    }
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30,
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 4,
        marginHorizontal: 8
    },
    itemContainer: {
        marginTop: 25,
    },
    textinput: {
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    textinput1: {
        alignSelf: 'center',
        marginTop: 20,
    },
    restaurantimage: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        width: 390,
        height: 250,
    },
    accountimage: {
        marginTop: 25,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        width: 150,
        height: 150,
        borderRadius: 500,
        alignSelf: 'center',
    },
    itemContainer: {
        marginTop: 35,
        alignItems: 'center',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    TextComponentStyle: {
        width: 200,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#ffffff',
        padding: 6,
        fontSize: 20,
        textAlign: 'center',
    }
});

const AppContainer = createAppContainer(bottomTabNavigator);