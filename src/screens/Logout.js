import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/user'
import Orientation from 'react-native-orientation-locker';

class Logout extends Component {
    
    UNSAFE_componentWillMount() {
        Orientation.unlockAllOrientations();
        Orientation.removeOrientationListener(this._onOrientationDidChange);
        this.logout()
    }

    _onOrientationDidChange = (orientation) => {
        if (orientation == 'LANDSCAPE') {
            Orientation.lockToLandscape();
        }
    }

    logout = () => {
        this.props.navigation.navigate("Login")
    }

    render() {
        return null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logou())
    }
}

export default connect(null, mapDispatchToProps)(Logout)