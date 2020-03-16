import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import SideMenu from 'react-native-side-menu';
import Menu from './Menuadmin';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import { colors } from './styles/index.style';
import APIKit from './APIKit';

export default class OrderScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: '',
            review: []
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
        APIKit.get('/review/').then((response) => {
            const review = response.data.results
            this.setState({ review })
        })
            .then(console.log(this.state))
            .catch((error) => console.log(error));
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
                                <Icon2 name="menu" size={30} color={'gray'} style={{ justifyContent: 'flex-start' }} onPress={this.toggle} style={{ marginLeft: -20 }} />
                            </NavButton>
                            <NavTitle>
                                <Text>
                                    Feedback
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
                            <View>
                                <Text style={{fontWeight:'bold', fontSize: 20, marginTop: 20, marginLeft: 20}}>Ratings & Reviews</Text>
                                {this.state.review.map((checkreview) => {
                                    return (
                                        <View style={{ flexDirection: 'column', marginTop: 30}}>
                                            <Text style={{ fontSize: 15, marginLeft: 30  }}>Rating: {checkreview.starCount}/5</Text>
                                            <View style={{ flexDirection: 'column', marginTop: 10 }}>
                                                <Text style={{ fontSize: 15, marginLeft: 30  }}>- {checkreview.review_text}</Text>
                                            </View>
                                            <Text numberOfLines={1} style={styles.line}>___________________________________________________________</Text>

                                        </View>
                                    )
                                }
                                )}

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
    line: {
        color: 'gray',
        alignSelf: 'center',
        marginBottom: 20,
        margin:10
    },
});