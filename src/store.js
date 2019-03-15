import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

// our reducers are in modules with the associative actions
import reducers from './modules'

// apply middleware to redux
const middleware = applyMiddleware(promise, thunk, createLogger())

// using this way, we can add redux store to tests more easily
const Root = props => {
    return (
        <Provider store={createStore(reducers, middleware)}>
            {props.children}
        </Provider>
    )
}

export default Root

Root.propTypes = {
    children: PropTypes.object
}
