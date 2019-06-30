import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import NavigationService from '../../navigationService'

import { MainScreen } from '../../screens'

class App extends Component {
    constructor(props) {
        super(props)

        // let initialRouteName = 'Main'

        this.stack = createStackNavigator({
            Main: MainScreen
        }, {
            initialRouteName: 'Main'
        })
    }

    render() {
        const Stack = createAppContainer(this.stack)
        const { store } = this.props
        return (
            <Stack 
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                }}
            />
        )
    }
}

export default App