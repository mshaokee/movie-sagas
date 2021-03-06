import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
// import {Button} from '@material-ui/core';

class Header extends Component {

    componentDidMount() {
        console.log('Header mounted');
    };//end componentDidMount

    //redux function to check reduxState
    // checkRedux = () => {
    //     console.log('current reduxState:', this.props.reduxState);
    // };//end checkRedux

    render() {
        return (
            <div>
                <h1 className="header">BLOCKBUSTER 2.0</h1>
                {/* <button onClick={this.checkRedux}>Check Redux</button> */}
            </div>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Header);