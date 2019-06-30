import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import App from './components/App'

class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <App store={store} />
            </Provider>
        )
    }
}

export default AppContainer