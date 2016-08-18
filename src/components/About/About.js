/**
 * Created by vnguyen on 8/9/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import style from './about.scss';
import fatNinjaPic from '../../../images/fat-ninja.svg';
const greeting = 'Hello, I am Vu';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1 className={style.greeting}>{greeting}</h1>
                <div className={style.whatAmI}>
                    <p>
                        I am a code...
                        <img src={fatNinjaPic} className={style.ninjaPic}/>
                        for <span className={style.money}>hire</span>
                    </p>
                    <p>
                        My weapons of choice HTML, CSS, and JavaScript
                    </p>
                    <p>
                        I have also been known to assault Java and .NET backends
                    </p>
                </div>
                <div className={style.whereIamFrom}>
                    <p>I come from the Lone Star State, but I am looking to move to The Golden State and have my heart set on the Bay area</p>
                </div>
            </div>
        )
    }
}

About.propTypes = {}