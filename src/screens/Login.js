import React, { Component } from 'react';
import {
    TextInput,
    Image,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Linking
} from 'react-native';
import { connect } from 'react-redux'
import { login } from '../store/actions/user';

const resetPassLink = 'https://www.aspolpb.com.br'

 class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            token: 'token'
        }

    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && ! this.props.isLoading) {
            this.props.navigation.navigate('Home')
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    resetPassword = () => {
       Linking.canOpenURL(resetPassLink).then(supported => {
           if (supported) {
               Linking.openURL(resetPassLink)
           }else {
               console.log('Nao abre')
           }
       })
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
                            keyboardType="default"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })} />

                        <TouchableOpacity style={styles.button} onPress={this.login}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.resetPassword}>
                            <Text style={styles.link}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>


                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
   return {
       isLoading: user.isLoading
   } 
}

const mapDispatchToProps = dispatch => {
    return {
      onLogin: user => dispatch(login(user))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
        padding: 10,
        color: "#fff"
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