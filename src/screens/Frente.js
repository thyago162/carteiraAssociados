import React, {Component} from  'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Orientation from 'react-native-orientation-locker';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default class Frente extends Component {

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

    associated = () => {
        
    }




    render() {
        return (
            <View>
                <Text>
                    Frente da carteira
                </Text>
            </View>
        )
    }
}