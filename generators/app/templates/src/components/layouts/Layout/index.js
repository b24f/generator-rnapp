import React, { Component } from 'react'
import { View } from 'react-native'

import { viewportWidth, viewportHeight } from '../../../constants'

const defaultStyles = {
    flex: 1,
    width: viewportWidth,
    height: viewportHeight,
}

class Layout extends Component {

    wrapChildren = (children) => {
        if (Array.isArray(children)) {
            return (
                children.map((child, key) => {
                    const childStyle = { ...child.props.style }
                    return React.cloneElement(child, { key, style: childStyle })
                })
            )
        } else {
            return React.cloneElement(children)
        }
    }

    render() {
        const { children, styles, ...otherProps } = this.props;
        const wrappedChildren = this.wrapChildren(children)
        return (
            <View style={{ ...defaultStyles, ...styles }}>
                { wrappedChildren }
            </View>
        )
    }
}

export default Layout