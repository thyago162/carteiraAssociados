import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

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

const styles = StyleSheet.create({
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
        width: 250,
        height: 95,
        marginTop: 10,
        marginLeft: 20
    },

    name: {
        width: '100%',
        marginLeft: 20
    },

    title: {
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 20
    },

    subtitle: {
        color: '#ffffff',
        fontSize: 32,
        marginLeft: 20
    },

    other: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})