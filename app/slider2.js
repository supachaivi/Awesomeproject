import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, AsyncStorage, } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES1, ENTRIES2, ENTRIES3 } from './static/entries';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Actions } from 'react-native-router-flux';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/Feather";
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import imagedb from './Imagedb'
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import APIKit from './APIKit';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class example extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            menu: [],
            promotion: []

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
            var self = this
            Object.keys(response.data.results).forEach(function (i) {
                self.state.promotion.push({ title: menu[i].menu_name, subtitle: menu[i].description, illustration: menu[i].menu_image })
            })
            this.setState({ menu })
        })
            .catch((error) => console.log(error));
    }




    mainExample(number, title) {
        const { slider1ActiveSlide } = this.state;


        return (
            <View style={styles.exampleContainer}>
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
        // console.log(this.state.menu)
        // console.log(ENTRIES1)
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        const example1 = this.mainExample();
        const token = this.props.token
        console.log(token + 'hello2')


        return (
            <SafeAreaView style={styles.safeArea}>
                <SideMenu
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenuState(isOpen)}>
                    <View style={styles.container}>
                        <View style={{ justifyContent: 'flex-start' }}>
                            <NavBar>
                                <NavButton>
                                    <Icon2 name="menu" size={30} color={'gray'} style={{ justifyContent: 'flex-start' }} onPress={this.toggle} style={{ marginLeft: -20 }} />
                                </NavButton>
                                <NavTitle>
                                    <Text>
                                        Home(main dishes)
                                    </Text>
                                </NavTitle>
                                <NavButton>
                                    <Icon1 name="shopping-cart" size={25} color={'gray'} style={{ justifyContent: 'center' }} onPress={() => Actions.mycart()} />
                                </NavButton>
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
                                    return (<Card style={{marginBottom: 20}}>
                                        <CardImage
                                            source={{ uri: image.menu_image }}
                                        />
                                        <CardTitle
                                            title={image.menu_name}
                                        />
                                        <CardContent text={image.description} />
                                        <CardAction
                                            separator={true}
                                            inColumn={false}>
                                            <CardButton
                                                onPress={() => {

                                                    this.props.navigation.navigate('fooddetail', { image, token });

                                                }}
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

                            </View>

                        </ScrollView>

                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', flex: 0.165 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                automaticallyAdjustContentInsets={true}
                            >
                                <NavBar>
                                    <NavButton onPress={() => Actions.slider({token})}>
                                        <Image source={require('../src/soup.jpg')} style={styles.logo} />
                                        <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Soup</NavButtonText>
                                    </NavButton>
                                </NavBar>
                                <NavBar>
                                    <NavButton onPress={() => Actions.slider1({token})}>
                                        <Image source={require('../src/salad.jpg')} style={styles.logo} />
                                        <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Salad</NavButtonText>
                                    </NavButton>
                                </NavBar>
                                <NavBar>
                                    <NavButton onPress={() => Actions.slider2({token})}>
                                        <Image source={require('../src/main.jpg')} style={styles.logo} />
                                        <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Main</NavButtonText>
                                    </NavButton>
                                </NavBar>
                                <NavBar>
                                    <NavButton onPress={() => Actions.slider3({token})}>
                                        <Image source={require('../src/side.jpg')} style={styles.logo} />
                                        <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Side Dish</NavButtonText>
                                    </NavButton>
                                </NavBar>
                                <NavBar>
                                    <NavButton onPress={() => Actions.slider4({token})}>
                                        <Image source={require('../src/drink.jpg')} style={styles.logo} />
                                        <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Drink</NavButtonText>
                                    </NavButton>
                                </NavBar>
                                <NavBar>
                                    <NavButton onPress={() => Actions.slider5({token})}>
                                        <Image source={require('../src/dessert.jpg')} style={styles.logo} />
                                        <NavButtonText style={{ fontSize: 10, marginBottom: 8, alignSelf: 'center', color: 'black' }}>Dessert</NavButtonText>
                                    </NavButton>
                                </NavBar>
                            </ScrollView>
                        </View>

                    </View>
                </SideMenu>

            </SafeAreaView>
        );
    }
}
