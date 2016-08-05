/**
 * Created by vnguyen on 8/5/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//React-Toolbox
import 'react-toolbox/lib/commons.scss';
import {AppBar} from 'react-toolbox/lib/app_bar';
import {IconButton} from 'react-toolbox/lib/button';
import {Layout, Panel, Sidebar} from 'react-toolbox/lib/layout';

//My Stuff
import {toggleRightSideBar} from '../../actions';
import style from './index.scss';
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    onToggleSidebar: ()=> dispatch(toggleRightSideBar())
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MainLayout extends Component {
    render() {
        let {children, rightSideBarCollapsed, onToggleSidebar} = this.props;
        return (
            <Layout>
                <Panel>
                    <AppBar>
                        <IconButton icon='menu' inverse={ true } onClick={ this.props.onToggleSidebar }/>
                        <div className={style.appBarCenterGrow}>
                            Vu Nguyen
                        </div>
                    </AppBar>
                    <div className={style.mainContainer}>
                        {children}
                    </div>
                </Panel>
                <Sidebar pinned={ !rightSideBarCollapsed } width={ 5 }>
                    <div><IconButton icon='close' onClick={ onToggleSidebar }/></div>
                    <div className={style.sidebar}>
                        <p>Side bar...all sorts of options being planned out</p>
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