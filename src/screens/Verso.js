import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Orientation from 'react-native-orientation-locker';


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
        justifyContent: 'space-around',
        flex: 1
    },
})

