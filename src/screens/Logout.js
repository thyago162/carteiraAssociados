import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/user'

class Logout extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentWillMount() {
        this.logout()
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