import React, { Component } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

import { Layout } from '../../components/layouts'
import { ReactNativeIcon } from '../../components/svg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

class MainScreen extends Component {
  static navigationOptions = {
    title: 'MainScreen'
  }
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    return (
      <Layout styles={styles.container}>
        <ReactNativeIcon />
        <Text style={styles.welcome}>Hello there!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default MainScreen