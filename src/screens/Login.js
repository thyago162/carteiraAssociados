import React, { Component } from 'react';
import {
    TextInput,
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    StyleSheet,
    Alert
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import axios from 'axios';

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            matricula: '',
            cpf: '',
            token: '',
            token: ''
        }

    }


    componentDidMount() {
        this.getScreenSize();
    }

    login = () => {
        axios.post('http://193.46.198.137:8000/api/login')
            .then(res => {
                if (res.status === 200) {
                    if (res.data.response.token) {

                        this.setState({ token: res.data.response.token })
                        this.props.navigation.navigate('Home')
                    }

                    let response = res.data.response.error
                    return <Alert>
                        <Text>Código: {response.code}</Text>
                        <Text>Mensagem: {response.error}</Text>
                    </Alert>

                }
            })
            .catch(err => {
                return <Alert>{err}</Alert>
            })

    }

    getScreenSize = () => {
        const screenHeight = Math.round(Dimensions.get('window').height)
        this.setState({ screenHeight: screenHeight })
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
                            placeholder='Matrícula'
                            keyboardType="numeric"
                            value={this.state.matricula}
                            onChangeText={matricula => this.setState({ matricula })} />

                        <TextInput
                            placeholderTextColor="#fff"
                            style={styles.input}
                            placeholder='CPF'
                            keyboardType="numeric"
                            value={this.state.cpf}
                            onChangeText={cpf => this.setState({ cpf })} />

                        <TouchableOpacity style={styles.button} onPress={this.login}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.link}>Esqueceu a senha?</Text>
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
    },

    link: {
        color: '#ffffff'
    }
})