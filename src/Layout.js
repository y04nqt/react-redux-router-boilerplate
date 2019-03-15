import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header'
import AnotherContainer from './containers/AnotherContainer'
import SampleContainer from './containers/SampleContainer'


class Layout extends React.Component {

    render() {
        return (
            <Router>
                <ErrorBoundary>
                    <div className="layout">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={SampleContainer} />
                            <Route exact path="/another" component={AnotherContainer} />
                        </Switch>
                    </div>
                </ErrorBoundary>
            </Router>
        );
    }
}

export default Layout
