/**
 * Created by vnguyen on 8/9/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import style from './home.scss';

export default class Home extends Component {
    render() {
        //TODO:MAKE THIS MORE MEANINGFUL
        return (
            <div>
                <h1>No place like home!!!</h1>
            </div>
        );
    }
}

Home.propTypes = {};