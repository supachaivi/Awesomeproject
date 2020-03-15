import React from 'react'
import {
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native'
// import APIKit from './APIKit';
import axios from 'axios'
export default class SignUp extends React.Component {
    state = {
        starCount: '', review_text: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    onPressRegister() {
        const { starCount, review_text } = this.state;
        const payload = { starCount, review_text };
        console.log(payload);     
        axios.post('http://161.246.5.195:8000/api/review/', payload)
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)});
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='StarCount'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    onChangeText={val => this.onChangeText('starCount', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Review_Text'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    onChangeText={val => this.onChangeText('review_text', val)}
                />

                <Button
                    title='Sign Up'
                    onPress={this.onPressRegister.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 8,
        color: 'gray',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        backgroundColor: '#DCDCDC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})