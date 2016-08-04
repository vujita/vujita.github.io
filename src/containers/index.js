/**
 * Created by vnguyen on 7/26/16.
 */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toolbox/lib/app_bar/theme.scss';
import {AppBar, Checkbox, IconButton} from 'react-toolbox';
import {Layout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import style from './index.scss';
class LayoutTest extends React.Component {
    state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false
    };

    toggleDrawerActive = () => {
        this.setState({drawerActive: !this.state.drawerActive});
    };



    toggleSidebar = () => {
        this.setState({sidebarPinned: !this.state.sidebarPinned});
    };

    render() {
        return (
            <Layout>
                <Panel>
                    <AppBar>
                        <div className={style.appBarCenterGrow}>
                            Vu Nguyen
                        </div>
                        <IconButton icon='menu' inverse={ true } onClick={ this.toggleSidebar }/>
                    </AppBar>
                    <div className={style.mainContainer}>
                        <b>Coming soon...</b>
                    </div>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div className={style.sidebar}>
                        <p>Side bar...all sorts of options being planned out</p>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}

ReactDOM.render(
    <LayoutTest/>,
    document.getElementById("content")
);
