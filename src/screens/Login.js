import React, { Component } from 'react';
import { TextInput, Image, View, Text, TouchableOpacity, Dimensions, ImageBackground, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        token: ''
    }

    login = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require("../../assets/images/background.jpeg")}>
                    <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
                    <View style={styles.form}>
                        <TextInput
                            placeholderTextColor="#fff"
                            style={styles.input}
                            placeholder='Email'
                            keyboardType="email-address"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })} />

                        <TextInput
                            placeholderTextColor="#fff"
                            style={styles.input}
                            placeholder='Senha'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })} />

                        <TouchableOpacity style={styles.button} onPress={this.login}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>


                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    background: {
        width: '100%',
        height: windowHeight,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 2
    },

    logo: {
        width: 250,
        height: 100
    },

    form: {
        width: '90%'
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        padding: 10
    },

    button: {
        height: 40,
        marginTop: 15,
        backgroundColor: '#ffffff',
        borderRadius: 5

    },

    buttonText: {
        padding: 5,
        textAlign: 'center',
        color: 'rgb(189,22,34)',
        fontWeight: 'bold',
        fontSize: 20

    }
})