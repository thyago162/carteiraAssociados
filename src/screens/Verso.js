import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import {createStyles, maxHeight} from 'react-native-media-queries';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


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
                        <View style={styles.subtitles}>
                            <Text style={styles.subtitle}>CNPJ 08.451.523/0001-006</Text>
                            <Text style={styles.subtitle}>contato.aspolpb@gmail.com - (83) 3506-3429</Text>
                            <View style={styles.footer}>
                                <TouchableOpacity>
                                    <Icon name="facebook"  style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon name="instagram" style={styles.icon} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.subtitle}>aspolpb.com.br</Text>
                                </TouchableOpacity>
                            </View>
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
        marginBottom: 80
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 36,
        marginTop: 25
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },

    subtitle: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: 'bold'
    },

    subtitles: {
        marginTop: 70,
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        padding: 2,
        fontSize: 50,
        color: '#ffffff'
    }
}

const styles = createStyles(
    base,

    maxHeight(980, {
        text: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 24,
            marginTop: 10,
        },

        body: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 60
        },
    
    
        title: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 32
        },
    
        subtitle: {
            color: '#ffffff',
            fontSize: 24,
            fontWeight: 'bold'
        },
    
        subtitles: {
            marginTop: 30,
            flexDirection: 'column',
            alignItems: 'center',
        },
    
        icon: {
            padding: 2,
            fontSize: 30,
            color: '#ffffff'
        }
    }),

    maxHeight(760, {
        text: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 2
        },

        body: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 80
        },
    
        title: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 22
        },
    
        subtitle: {
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold'
        },
    
        subtitles: {
            marginTop: 30,
            flexDirection: 'column',
            alignItems: 'center',
        },
    
        icon: {
            padding: 2,
            fontSize: 25,
            color: '#ffffff'
        }
    }),

    maxHeight(600, {
        text: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 2,
        },

        body: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 80
        },
    
        title: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18
        },
    
        subtitle: {
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 'bold'
        },
    
        subtitles: {
            marginTop: 30,
            flexDirection: 'column',
            alignItems: 'center',
        },
    
        icon: {
            padding: 2,
            fontSize: 20,
            color: '#ffffff'
        }
    })
)

