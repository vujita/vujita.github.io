/**
 * Created by vnguyen on 8/9/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import style from './home.scss';
import routes, {friendlyNames} from '../../constants/routes';
import profileImage from '../../../images/profile.jpg';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

const navLinks = [];
for (var k in routes) {
    if (k != routes.HOME) {
        console.log(k);
        navLinks.push(
            <Link to={k.toLowerCase()} key={k}>
                <li>
                    {friendlyNames[k]}
                </li>
            </Link>
        );
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
    render() {
        return (
            <div className={style.homeContainer}>
                <img className={style.profileImg} src={profileImage}/>
                <div className={style.profileDescription}>
                    Software Engineer
                </div>
                <ul className={style.navList}>
                    {navLinks}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {};