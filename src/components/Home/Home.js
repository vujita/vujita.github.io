/**
 * Created by vnguyen on 8/9/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import style from './home.scss';
import profileImage from '../../../images/profile.jpg';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={style.homeContainer}>
                <div className={style.profile}>
                    <img className={style.profileImg} src={profileImage}/>
                    <div className={style.profileDescription}>
                        <p><b>Vu Nguyen</b></p>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};