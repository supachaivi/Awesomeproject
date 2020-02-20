import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES1, ENTRIES2, ENTRIES3 } from './static/entries';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Actions } from 'react-native-router-flux';
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import imagedb from './Imagedb'

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class example extends Component {

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
                        <NavButton>
                            <Icon1 name="shopping-cart" size={25} color={'gray'} style={{ justifyContent: 'center' }} onPress={() => Actions.menu()} />
                        </NavButton>
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
                                        onPress={() => { }}
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
                        {/* <Card>
                            <CardImage
                                source={require('../src/1.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/2.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/3.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/4.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/5.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/6.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/7.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                        <Card>
                            <CardImage
                                source={require('../src/8.jpg')}
                            // title="Above all i am here"
                            />
                            <CardTitle
                                title="This is a title"
                                subtitle="This is subtitle"
                            />
                            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => { }}
                                    title="Push"
                                    color="blue"
                                />
                                <CardButton
                                    onPress={() => { }}
                                    title="Later"
                                    color="blue"
                                />
                            </CardAction>
                        </Card> */}
                        {example2}
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
