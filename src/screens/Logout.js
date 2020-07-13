import React, {Component} from 'react';

export default class Logout extends Component {
    constructor(props) {
        super(props)
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