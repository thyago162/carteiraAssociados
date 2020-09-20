import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import {createStyles, maxHeight} from 'react-native-media-queries';
import { connect } from 'react-redux';
import { getMembership } from '../store/actions/membership';
import Orientation from 'react-native-orientation-locker';

class Frente extends Component {

    state = {
        cpf: null,
        filiacao: null,
        nascimento: null
    }

    _onOrientationDidChange = (orientation) => {
        if (orientation == 'PORTRAIT') {
            Orientation.lockToLandscapeLeft();
        }
    }

    componentDidMount() {
        Orientation.lockToLandscapeLeft();
        Orientation.addOrientationListener(this._onOrientationDidChange);
        this.associated();
        this.cpfMask(this.props.cpf)
        this.normalDateMask(this.props.nascimento)
        this.fullDateMask(this.props.filiacao)
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
        Orientation.removeOrientationListener(this._onOrientationDidChange);
    }

    associated = () => {
        this.props.getMembershipData()
    }

    cpfMask = param => {
        if (param) {
            let cpf = param.split("")
            for (let index =0; index < cpf.length; index++) {
                if (index == 2 || index == 5) {
                    cpf[index] += '.'
                 }
         
                 if (index == 8) {
                     cpf[index] += '-'
                 }
            }
            this.setState({cpf: cpf.join('')})
        }
    }

    normalDateMask = param => {
        if (param) {
            let date = param.split('-').reverse().join('/')
            this.setState({nascimento: date})
        }
    }

    fullDateMask = param => {
        if (param) {
            let fullDate = param.split(' ')
            let date = fullDate[0].split('-').reverse().join('/')

            this.setState({filiacao: date})
        }
    }

    render() {
       
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require("../../assets/images/frente.jpeg")}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.image} />

                    <View style={styles.name}>
                        <Text style={styles.title}>Associado</Text>
                        <Text style={styles.subtitle}>{this.props.nome}</Text>
                    </View>
                    <View style={styles.other}>
                        <View>
                            <Text style={styles.title}>Filiação</Text>
                            <Text style={styles.subtitle}>{this.state.filiacao}</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>CPF</Text>
                            <Text style={styles.subtitle}>{this.state.cpf}</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Data de Nascimento</Text>
                            <Text style={styles.subtitle}>{this.state.nascimento}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        token: user.token,
        nome: user.nome,
        cpf: user.cpf,
        filiacao: user.filiacao,
        nascimento: user.nascimento
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMembershipData: () => dispatch(getMembership())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frente)

const base = {
    container: {
        flex: 1
    },

    background: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1
    },

    image: {
        width: 460,
        height: 155,
        marginTop: 30,
        marginLeft: 20
    },

    name: {
        width: '100%',
        marginLeft: 20
    },

    title: {
        fontSize: 40,
        color: '#ffffff',
        marginLeft: 10
    },

    subtitle: {
        color: '#ffffff',
        fontSize: 54,
        marginLeft: 10
    },

    other: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}
const styles = new createStyles (
    base,

    maxHeight(980, {
        image: {
            width: 330,
            height: 110,
            marginTop: 30,
            marginLeft: 20
        },
    
        name: {
            width: '100%',
            marginLeft: 20
        },
    
        title: {
            fontSize: 30,
            color: '#ffffff',
            marginLeft: 10
        },
    
        subtitle: {
            color: '#ffffff',
            fontSize: 44,
            marginLeft: 10
        },
    }),

    maxHeight(760, {
        image: {
            width: 240,
            height: 100,
            marginTop: 20,
            marginLeft: 10
        },
    
        name: {
            width: '100%',
            marginLeft: 29
        },
    
        title: {
            fontSize: 20,
            color: '#ffffff'
        },
    
        subtitle: {
            color: '#ffffff',
            fontSize: 26,
            marginLeft: 10
        },
    }),

    maxHeight(600, {
        image: {
            width: 200,
            height: 100,
            marginTop: 20,
            marginLeft: 10
        },
    
        name: {
            width: '100%',
            marginLeft: 10
        },
    
        title: {
            fontSize: 18,
            color: '#ffffff',
            marginLeft: 10
        },
    
        subtitle: {
            color: '#ffffff',
            fontSize: 24,
            marginLeft: 10
        },
    })
)