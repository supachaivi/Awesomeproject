import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar, ScrollView, SafeAreaView, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import SFNumberPicker from "react-native-sf-numberpicker";
import { Actions } from 'react-native-router-flux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import imagedb from './Imagedb'
import NumericInput from 'react-native-numeric-input'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './components/SliderEntry';
import { colors } from './styles/index.style';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import APIKit from './APIKit';
import { acc } from 'react-native-reanimated';
import { ENTRIES1 } from './static/entries'

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
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            menu: [],
            promotion: []

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

    componentDidMount() {
        APIKit.get('/menu/category/?type=main').then((response) => {
            const menu = response.data.results
            // var self = this
            // Object.keys(response.data.results).forEach(function (i) {
            //     self.state.promotion.push({ title: menu[i].menu_name, subtitle: menu[i].description, illustration: menu[i].menu_image })
            // })
            this.setState({ menu })
        })
            .catch((error) => console.log(error));

        APIKit.get('/promotions/promotions/').then((response) => {
            const menu1 = response.data.results
            var self = this
            Object.keys(response.data.results).forEach(function (i) {
                self.state.promotion.push({ title: menu1[i].promotion_name, subtitle: menu1[i].description, illustration: menu1[i].promotion_picture })
            })
            this.setState({ menu1 })
        })
            .catch((error) => console.log(error));
    }

    mainExample(number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>



                {/* <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text> */}
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={this.state.promotion}
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
                    dotsLength={this.state.promotion.length}
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



    render() {
        const example1 = this.mainExample();

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <View style={{ justifyContent: 'flex-start' }}>
                        <NavBar>
                            <NavTitle>
                                <Text>
                                    Home(main dishes)
                            </Text>
                            </NavTitle>
                        </NavBar>
                    </View>

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
                        <View style={{ flex: 1 }}>
                            {example1}
                            {this.state.menu.map((image) => {
                                return (<Card style={{ marginBottom: 20 }}>
                                    <CardImage
                                        source={{ uri: image.menu_image }}
                                    // title="Above all i am here"
                                    />
                                    <CardTitle
                                        title={image.menu_name}
                                    // subtitle="This is subtitle"
                                    />
                                    <CardContent text={image.description} />
                                    {/* <CardAction
                                        separator={true}
                                        inColumn={false}>
                                        <CardButton
                                            onPress={() => {
                                            }}
                                            title="Push"
                                            color="blue"
                                        />
                                        <CardButton
                                            onPress={() => { }}
                                            title="Later"
                                            color="blue"
                                        />
                                    </CardAction> */}
                                </Card>)
                            })}
                        </View>

                        {/* {example2} */}
                    </ScrollView>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', flex: 0.165 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            automaticallyAdjustContentInsets={true}
                        >
                            <NavBar>
                                <NavButton onPress={() => Actions.home()}>
                                    <Image source={require('../src/soup.jpg')} style={styles.logo} />
                                    <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Soup</NavButtonText>
                                </NavButton>
                            </NavBar>
                            <NavBar>
                                <NavButton onPress={() => Actions.home1()}>
                                    <Image source={require('../src/salad.jpg')} style={styles.logo} />
                                    <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Salad</NavButtonText>
                                </NavButton>
                            </NavBar>
                            <NavBar>
                                <NavButton onPress={() => Actions.home2()}>
                                    <Image source={require('../src/main.jpg')} style={styles.logo} />
                                    <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Main</NavButtonText>
                                </NavButton>
                            </NavBar>
                            <NavBar>
                                <NavButton onPress={() => Actions.home3()}>
                                    <Image source={require('../src/side.jpg')} style={styles.logo} />
                                    <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Side Dish</NavButtonText>
                                </NavButton>
                            </NavBar>
                            <NavBar>
                                <NavButton onPress={() => Actions.home4()}>
                                    <Image source={require('../src/drink.jpg')} style={styles.logo} />
                                    <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Drink</NavButtonText>
                                </NavButton>
                            </NavBar>
                            <NavBar>
                                <NavButton onPress={() => Actions.home5()}>
                                    <Image source={require('../src/dessert.jpg')} style={styles.logo} />
                                    <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Dessert</NavButtonText>
                                </NavButton>
                            </NavBar>
                        </ScrollView>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

class QueueScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    componentDidMount() {
        APIKit.get('/accounts/logout/');
    }

    onPressQueue() {
        const { value } = this.state;
        const payload = { quantity: value };
        console.log(payload)
        // axios.defaults.withCredentials = true;
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        APIKit.post('/reservation/reservation/', payload,
            // {
            //     headers: {
            //         "Accept": "application/json",
            //         "Content-Type": "application/json",
            //         // "X-CSRFToken": "\"" + token + "\""
            //         "X-CSRFToken": token
            //     }
            // }
        )
            .then(response => { console.log(response), Alert.alert('Add to system', `${value} seat was added to the queue.`), Actions.home2() })
            .catch(error => { console.log(error.response) });
    }

    render() {
        console.log(token + 'hello')
        // console.log(token)
        return (
            <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <NavBar>
                        <NavTitle>
                            <Text>
                                Queue
                            </Text>
                        </NavTitle>
                    </NavBar>
                </View>

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
                        // value={this.state.value}
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
                        onPress={this.onPressQueue.bind(this)}

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

class QueueScreen1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: []
        };
    }

    componentDidMount() {
        APIKit.get('/reservation/reservation/').then((response) => {
            const queue = response.data.results
            console.log(queue)
            this.setState({ queue })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }

    render() {
        const { queue } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <NavBar>
                        <NavTitle>
                            <Text>
                                Queue
                                </Text>
                        </NavTitle>
                    </NavBar>
                </View>

                {/* {this.state.queue.map((checkqueue) => {
                        return (
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.blanktext}>
                                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 35, marginLeft: 100 }}>Your Queue</Text>
                                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 105, marginLeft: -90 }}>{checkqueue.queue}</Text>
                                    </View>
                                </View>

                            </View>
                        )

                    })} */}
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.blanktext}>
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 35, marginLeft: 100 }}>Wait queue</Text>
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 105, marginLeft: -90 }}>{(queue.length) - 1}</Text>

                        </View>
                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.blanktext1}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 25, marginLeft: 65 }}>
                            Total queue : {queue.length}</Text>
                        {/* <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 45, marginLeft: -60 }}>Now</Text> */}
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ marginTop: 85 }}>
                        <Button
                            onPress={() => {
                                if ((queue.length) - 1 == 0) {
                                    Alert.alert("You queue already")
                                }
                                else {
                                    Alert.alert("You queue not already")
                                }


                            }}

                            title="Check Queue"
                            color="#c53c3c"
                        />
                    </View>
                </View>
            </View>
        )

    }
    onNumberChange = (tag, number) => {
    }
}

class HistoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        };
    }

    componentDidMount() {
        APIKit.get('/mycart/mycarttest/order/').then((response) => {
            const history = response.data.order_list
            console.log(history)
            this.setState({ history })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }
    render() {
        const history = this.state.history
        if (history != null) {
            return (
                <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                    <NavBar>
                        <NavTitle>
                            <Text>
                                History
                         </Text>
                        </NavTitle>
                    </NavBar>
                    <ScrollView>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginTop: 20, marginBottom: 10 }}>ประวัติรายการสั่งอาหาร</Text>
                        {this.state.history.map((historylist) => {
                            // var total = 0;
                            // var total = total + (listorder.food_menu.price * listorder.quantity);
                            return (

                                <View style={{ flexDirection: 'column', marginTop: 20, marginLeft: 20 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                        <Text style={{ fontSize: 16 }}>- {historylist.food_name}</Text>
                                        <Text style={{ fontSize: 16, marginLeft: 20 }}>{historylist.price}      บาท</Text>
                                    </View>
                                </View>

                            )

                        })}
                        <Text numberOfLines={1} style={styles.line}>_______________________________________________________________</Text>

                    </ScrollView>


                </View>
            );
        }
        else {
            return (
                <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                    <NavBar>
                        <NavTitle>
                            <Text>
                                History
                         </Text>
                        </NavTitle>
                    </NavBar>
                    <ScrollView>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginTop: 20, marginBottom: 10 }}>ประวัติรายการสั่งอาหาร</Text>
                        {/* {this.state.history.map((historylist) => {
                        // var total = 0;
                        // var total = total + (listorder.food_menu.price * listorder.quantity);
                        return (

                            <View style={{ flexDirection: 'column', marginTop: 20, marginLeft: 20 }}>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <Text style={{ fontSize: 16 }}>- {historylist.food_name}</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 20 }}>{historylist.price}      บาท</Text>
                                </View>
                            </View>

                        )

                    })} */}

                    </ScrollView>


                </View>
            );
        }

    }
}
class AccountScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {}
        };
    }

    componentDidMount() {
        APIKit.get('/accounts/accounviewprofile/').then((response) => {
            const account = response.data
            this.setState({ account })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
    }
    render() {
        const { account } = this.state
        // account = account.pop()

        console.log(account.image)

        return (
            <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
                <NavBar>
                    <NavTitle>
                        <Text>
                            Account
                            </Text>
                    </NavTitle>
                </NavBar>
                <Image style={styles.accountimage} source={{ uri: account.image }} />
                {/* <View style={{ height: 100, backgroundColor: 'red', alignItems: 'space-around' }} /> */}
                <View style={styles.MainContainer1}>
                    <Text style={{ fontSize: 20 }}>  Your Point: </Text>
                    <Text style={{ fontSize: 20 }}>100 points</Text>
                </View>
                <View style={styles.MainContainer}>
                    <Icon name="user" size={25} />
                    <Text >  Name: </Text>
                    <Text > {account.first_name} {account.last_name}</Text>
                </View>
                <View style={styles.MainContainer}>
                    <Icon name="phone" size={25} />
                    <Text >  phone: </Text>
                    <Text> {account.phone}</Text>
                </View>
                <View style={styles.MainContainer}>
                    <Icon1 name="email" size={25} />
                    <Text >  E-mail: </Text>
                    <Text> {account.email}</Text>
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
        },
        Checkqueue: {
            screen: QueueScreen1,
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
    line: {
        color: 'gray',
        alignSelf: 'center',
        marginBottom: 20
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
        marginBottom: 25,
        borderWidth: 2,
        borderColor: 'black',
        width: 170,
        height: 170,
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 0,
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 6,
        textAlign: 'left',
        alignSelf: 'center',

    },
    MainContainer1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 0,
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ff7d7f',
        padding: 6,
        textAlign: 'left',
        alignSelf: 'center',

    },

    TextComponentStyle: {
        width: 400,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#ffffff',
        padding: 6,
        fontSize: 20,
        textAlign: 'left',
    },
    logo: {
        width: 50,
        height: 33,
        alignItems: 'center',
        borderRadius: 10,
        // borderColor: 'black',
        // borderWidth: 1
    },
    blanktext: {
        flex: 1,
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'red',
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    blanktext1: {
        flex: 1,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'orange',
        height: 100,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    LinearGradientStyle: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 20
    },

});

const AppContainer = createAppContainer(bottomTabNavigator);