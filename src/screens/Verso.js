import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import {createStyles, maxHeight} from 'react-native-media-queries';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const windowHeight = Dimensions.get('window').height

export default class Verso extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        rotationLock: ''
    }

    _onOrientationDidChange = (orientation) => {
        if (orientation == 'PORTRAIT') {
            Orientation.lockToLandscapeLeft();
        }
    }

    componentDidMount() {
        Orientation.lockToLandscapeLeft();
        Orientation.addOrientationListener(this._onOrientationDidChange);
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
        Orientation.removeOrientationListener(this._onOrientationDidChange);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require("../../assets/images/verso.jpeg")}>
                    <View style={styles.head}>
                        <Text style={styles.text}>Este cartão é pessoal e instraferível</Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.title}>ASSOCIAÇÃO DOS POLICIAIS CÍVIS DE CARREIRA DA PARAÍBA</Text>
                        <Text style={styles.subtitle}>CNPJ 08.451.523/0001-006</Text>
                        <Text style={styles.subtitle}>contato.aspolpb@gmail.com - (83) 3506-3429</Text>
                        <View style={styles.footer}>
                            <TouchableOpacity>
                                <Icon name="facebook" size={25} color="#fff"  style={styles.icon} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Icon name="instagram" size={25} color="#fff" style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.subtitle}>aspolpb.com.br</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </ImageBackground>


            </View>
        )
    }
}

const base = {
    container: {
        flex: 1
    },
    background: {
        width: '100%',
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    },

    head: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 7

    },

    body: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 40

    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },

    text: {
        color: '#fff',
        fontWeight: 'bold'
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    },

    subtitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    icon: {
        padding: 2
    }
}

const styles = createStyles(
    base,

    maxHeight(600, {
        title: {
            fontSize: 18
        },

        subtitle: {
            fontSize: 16
        }
    } )
)

