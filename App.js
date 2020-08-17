import React, { Component } from 'react';
import Navigator from './src/components/Navigator'
import { connect } from 'react-redux'
import { setMessage } from './src/store/actions/message'
import { Alert } from 'react-native';

class App extends Component {

  componentDidUpdate = () => {
    if (this.props.text && this.props.text.trim()) {
      Alert.alert(this.props.title || 'Mensagem', this.props.text)
      this.props.clearMessage()
    }
  }

  render() {
    return (
      <Navigator />
    )

  }
}

const mapStateToProps = ({ message }) => {
  return {
    title: message.title,
    text: message.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearMessage: () => dispatch(setMessage({ title: '', text: '' }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)