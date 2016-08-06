/**
 * Created by vnguyen on 8/5/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import 'react-toolbox/lib/commons.scss';
import {AppBar} from 'react-toolbox/lib/app_bar';
import {IconButton} from 'react-toolbox/lib/button';
import {Layout, Panel, Sidebar} from 'react-toolbox/lib/layout';
import {List, ListItem} from 'react-toolbox/lib/list';
import {Link} from 'react-router';
import {toggleRightSideBar} from '../../actions';
import style from './index.scss';
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    onToggleSidebar: ()=> dispatch(toggleRightSideBar())
});
const linkToPages = [
    {
        to: 'Home',
        text: 'Home'
    }, {
        to: 'ShouldNotBeHere',
        text: 'Link to nowhere!'
    }
];
@connect(mapStateToProps, mapDispatchToProps)
export default class MainLayout extends Component {
    render() {
        let {children, rightSideBarPinned, onToggleSidebar} = this.props;
        return (
            <Layout>
                <Panel>
                    <AppBar>
                        <div className={style.appBarCenterGrow}>
                            {"{ Vu Nguyen }"}
                        </div>
                        <IconButton icon='menu' inverse={ true } onClick={ onToggleSidebar }/>
                    </AppBar>
                    <div className={style.mainContainer}>
                        <ul>
                            {linkToPages.map((lo)=>(
                                <li>
                                    <Link to={lo.to} activeClassName={style.activeLink}>{lo.text}</Link>
                                </li>
                            ))}
                        </ul>
                        {children}
                    </div>
                    <AppBar>
                        <div>
                            <a href="https://github.com/vujita/vujita.github.io" target="_blank">
                                {"View code"}
                            </a>
                        </div>
                        <div className={style.appBarCenterGrow}>
                        </div>
                        <div>
                            <a className={style.followMeIcons} href="https://github.com/vujita" target="_blank"
                               alt="Github!!!">
                                <i className="fa fa-github fa-inverse"/>
                            </a>
                            <a className={style.followMeIcons} href="https://github.com/vujita" target="_blank"
                               alt="StackOverflow!!!">
                                <i className="fa fa-stack-overflow fa-inverse"/>
                            </a>
                            <a className={style.followMeIcons}
                               href="https://www.linkedin.com/in/vu-nguyen-462b29a?trk=nav_responsive_tab_profile"
                               target="_blank" alt="LinkedIn!!!">
                                <i className="fa fa-linkedin fa-inverse"/>
                            </a>
                            <a className={style.followMeIcons} href="https://twitter.com/Vu_Man_Chu" target="_blank"
                               alt="Twitter, even though I don't use it!!!">
                                <i className="fa fa-twitter fa-inverse"/>
                            </a>
                        </div>
                    </AppBar>
                </Panel>
                <Sidebar pinned={ rightSideBarPinned } width={ 50 }>
                    <AppBar>
                        <div className={style.appBarCenterGrow}>
                            {"- Site Menu -"}
                        </div>
                        <IconButton icon='close' inverse={ true } onClick={ onToggleSidebar }/>
                    </AppBar>
                    <div className={style.sidebar}>
                        <List selectable ripple>
                            {linkToPages.map((lo, i)=>(
                                <ListItem to={`#/${lo.to}`} key={`link-topages-${i}`}
                                          key={`list-item-key-${i}`}
                                          onClick={onToggleSidebar}>
                                    <Link to={lo.to} activeClassName={style.activeLink}>
                                        {lo.text}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}
MainLayout.childContextTypes = {
    store: PropTypes.object
};
MainLayout.contextTypes = {
    store: PropTypes.object
};