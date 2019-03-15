import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            app: window.qlikApp
        }
    }

    handleClearAll = () => {
        this.state.app.clearAll()
    }


    render() {
        return (
            <AppBar id="header" position="sticky" color='primary'>
                <center>
                    <h2>React Redux Router Boilerplate</h2>
                </center>
                <nav>
                    <Link className="links" to="/">
                        <Button className="navBtnSpacing marginLeft16"
                            variant="contained"
                            color="secondary">Home</Button>
                    </Link>
                    <Link className="links" to="/another">
                        <Button className="navBtnSpacing"
                            variant="contained"
                            color="secondary">Another</Button>
                    </Link>
                    <Button className="navBtnSpacing flexAlignRight marginRight16"
                        variant="contained"
                        color="secondary"
                        onClick={this.handleClearAll}>Clear</Button>
                </nav>
            </AppBar>
        )
    }
}

export default Header
