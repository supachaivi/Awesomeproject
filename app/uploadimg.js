// import React, { Component } from 'react';
// import { View, Image, TouchableHighlight } from 'react-native';
// import { Actions } from 'react-native-router-flux';

// export default class TestButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { uri: require('../src/1.jpg') }
//     }

//     changeLogo() {
//         console.log('state changed!');
//         this.setState({
//             uri: require('../src/2.jpg')
//         });
//     }

//     render() {
//         return (
//             <View
//                 style={styles.container}
//             >
//                 <TouchableHighlight onPress={() => this.changeLogo()}>
//                     <Image
//                         source={this.state.uri}
//                         style={styles.logoStyle}
//                     />
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }

// const styles = {
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'blue',
//     },
//     logoStyle: {
//         width: 200,
//         height: 200,
//         marginLeft: 10,
//         marginRight: 5,
//         alignSelf: 'center',
//     },
// };

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
} from 'react-native';

const heartIcon = require('../src/button.png');

export default class MainApp extends Component {
    state = {
        liked: false,
    };

    _onPressBtn = () => {
        this.setState({
            liked: !this.state.liked,
        });
    }

    render() {
        const likedStyles = this.state.liked ? styles.liked : null;

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this._onPressBtn}
                    style={styles.btn}
                    underlayColor="#fefefe"
                >
                    <Image
                        source={heartIcon}
                        style={[styles.icon, likedStyles]}
                    />
                </TouchableHighlight>
                <Text style={styles.text}>Do you like this  app?</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
    },
    btn: {
        borderRadius: 5,
        padding: 10,
    },
    icon: {
        width: 180,
        height: 180,
        tintColor: '#f1f1f1',
    },
    liked: {
        tintColor: '#84ff00',
    },
    text: {
        marginTop: 20,
    },
});

