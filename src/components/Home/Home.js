/**
 * Created by vnguyen on 8/9/16.
 */
import React from 'react';
import { Link } from 'react-router';
import { forEach } from 'lodash';
import style from './home.scss';
import routes, { friendlyNames, HOME } from '../../constants/routes';
import profileImage from '../../images/profile.jpg';

const navLinks = [];
forEach(routes, (k) => {
  if (k !== HOME) {
    navLinks.push(
      <Link to={k.toLowerCase()} key={k}>
        <li>
          {friendlyNames[k]}
        </li>
      </Link>,
        );
  }
});
const Home = () => (
  <div className={style.homeContainer}>
    <img alt="" className={style.profileImg} src={profileImage} />
    <div className={style.profileDescription}>
            Software Engineer
        </div>
    <ul className={style.navList}>
      {navLinks}
    </ul>
  </div>
);

Home.propTypes = {};
export default Home;
