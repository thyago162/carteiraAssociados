import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import Orientation from 'react-native-orientation-locker';

const windowHeight = Dimensions.get('window').height

export default class Frente extends Component {

    constructor(props) {
        super(props)
    }

    state = {
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

    associated = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require("../../assets/images/frente.jpeg")}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.image} />

                    <View style={styles.name}>
                        <Text style={styles.title}>Associado</Text>
                        <Text style={styles.subtitle}>John Doe</Text>
                    </View>
                    <View style={styles.other}>
                        <View>
                            <Text style={styles.title}>Filiação</Text>
                            <Text style={styles.subtitle}>01/06/2020</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>CPF</Text>
                            <Text style={styles.subtitle}>011.231.734-24</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Aniversário</Text>
                            <Text style={styles.subtitle}>20/06/1980</Text>
                        </View>
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