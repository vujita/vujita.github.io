/**
 * Created by vnguyen on 8/9/16.
 */
import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import style from './mainLayout.scss';

const MainFooter = () => (
  <AppBar>
    <div>
      <a href="https://github.com/vujita/vujita.github.io" rel="noopener noreferrer" target="_blank">
        {'View code'}
      </a>
    </div>
    <div className={style.appBarCenterGrow} />
    <div>
      <a
        className={style.followMeIcons} href="https://github.com/vujita" rel="noopener noreferrer"target="_blank"
        alt="Github!!!"
      >
        <i className="fa fa-github fa-inverse" />
      </a>
      <a
        className={style.followMeIcons} href="http://stackoverflow.com/users/483631/vu-nguyen"
        target="_blank" rel="noopener noreferrer"
        alt="StackOverflow!!!"
      >
        <i className="fa fa-stack-overflow fa-inverse" />
      </a>
      <a
        className={style.followMeIcons}
        href="https://www.linkedin.com/in/vu-nguyen-462b29a?trk=nav_responsive_tab_profile"
        rel="noopener noreferrer"
        target="_blank" alt="LinkedIn!!!"
      >
        <i className="fa fa-linkedin fa-inverse" />
      </a>
      <a
        className={style.followMeIcons} href="https://twitter.com/Vu_Man_Chu" rel="noopener noreferrer" target="_blank"
        alt="Twitter, even though I don't use it!!!"
      >
        <i className="fa fa-twitter fa-inverse" />
      </a>
    </div>
  </AppBar>
);
MainFooter.propTypes = {};
export default MainFooter;
