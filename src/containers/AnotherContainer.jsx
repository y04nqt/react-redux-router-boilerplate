import React from 'react'
import { connect } from 'react-redux'
import { turnOn, turnOff } from '../modules/AnotherBoxModule'
import Button from '@material-ui/core/Button';

import AnotherView from '../views/AnotherView.jsx'

class AnotherContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            app: window.qlikApp,
            vis: ''
        }
    }

    handleTurnOn = () => {
        this.props.turnOn()
    }

    handleTurnOff = () => {
        this.props.turnOff()
    }

    componentWillMount() {

    }

    componentDidMount() {
        // need to pass class context into the promise resolution
        // in order to use state and class functions
        this.state.app.visualization.get('pPTsHPm').then((vis) => {
            vis.show('another-box-chart')
            this.setState({vis: vis})
            this.handleTurnOn()
        })
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.state.vis.close()
        this.handleTurnOff()
    }

    render() {
        return (
            <div id="sample-container">
                <center>
                    <h3>This is another view!</h3>
                </center>
                <center>
                    <Button onClick={this.handleTurnOn}
                            className="btnSpacing"
                            variant="contained"
                            color="primary">Turn On</Button>
                    <Button onClick={this.handleTurnOff}
                            className="btnSpacing"
                            variant="contained"
                            color="primary">Turn Off</Button>
                </center>
                <AnotherView another_visibility={this.props.another_visibility} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        another_visibility: state.anotherBox.another_visibility
    }
}

// mapStateToProps, mapDispatchToProps
export default connect(
    mapStateToProps,
    { turnOn, turnOff }
)(AnotherContainer)
