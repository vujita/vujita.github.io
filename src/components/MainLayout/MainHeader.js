/**
 * Created by vnguyen on 8/9/16.
 */
import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { IconButton } from 'react-toolbox/lib/button';
import style from './mainLayout.scss';

const MainHeader = props => (
  <AppBar>
    <IconButton icon="menu" inverse onClick={props.onToggleSideBar} />
    <div className={style.appBarCenterGrow}>
      {'{ Vu Nguyen }'}
    </div>
  </AppBar>
    );
MainHeader.propTypes = {
  onToggleSideBar: PropTypes.func.isRequired,
};
export default MainHeader;
