import React, { Component } from 'react';
import {
    TextInput,
    Image,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Linking
} from 'react-native';
import { connect } from 'react-redux'
import { login } from '../store/actions/user';
import {createStyles, maxHeight} from 'react-native-media-queries';

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

const base = {
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
        width: 500,
        height: 200
    },

    form: {
        width: '90%'
    },

    input: {
        borderBottomWidth: 2,
        borderColor: '#fff',
        padding: 5,
        color: "#fff",
        marginTop: 20,
        fontSize: 24
    },

    button: {
        height: 50,
        marginTop: 15,
        backgroundColor: '#ffffff',
        borderRadius: 5

    },

    buttonText: {
        padding: 5,
        textAlign: 'center',
        color: 'rgb(189,22,34)',
        fontWeight: 'bold',
        fontSize: 26
    },

    link: {
        color: '#ffffff',
        fontSize: 26
    }
}

const styles = createStyles(
    base,
    maxHeight(980, {
        logo: {
            width: 400,
            height: 160
        },

        input: {
            borderBottomWidth: 2,
            borderColor: '#fff',
            padding: 5,
            color: "#fff",
            marginTop: 20,
            fontSize: 22
        },
    
        button: {
            height: 50,
            marginTop: 15,
            backgroundColor: '#ffffff',
            borderRadius: 5
    
        },
    
        buttonText: {
            padding: 5,
            textAlign: 'center',
            color: 'rgb(189,22,34)',
            fontWeight: 'bold',
            fontSize: 24
        },

        link: {
            color: '#ffffff',
            fontSize: 24
        }
    }),

    maxHeight(760, {
        logo: {
            width: 290,
            height: 100
        },

        input: {
            borderBottomWidth: 1,
            borderColor: '#fff',
            padding: 5,
            color: "#fff",
            marginTop: 15,
            fontSize: 18
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
            fontSize: 22
        },

        link: {
            color: '#ffffff',
            fontSize: 18
        }
    }),


    maxHeight(600, {
        logo: {
            width: 250,
            height: 100
        },

        input: {
            borderBottomWidth: 1,
            borderColor: '#fff',
            padding: 5,
            color: "#fff",
            marginTop: 15,
            fontSize: 18
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
            fontSize: 22
        },

        link: {
            color: '#ffffff',
            fontSize: 18
        }
    })   
)