/**
 * Created by vnguyen on 8/8/16.
 */
import React, {PropType, Component} from 'react';
import {Link} from 'react-router';
import style from './PageNotFound.scss';

const PageNotFound = ()=> (
    <Link to="/">
        <div className={style.pageNotFound}/>
    </Link>
);
export default PageNotFound;
