/**
 * Created by vnguyen on 8/5/16.
 */
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import 'react-toolbox/lib/commons.scss';
import { reduce } from 'lodash';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import { List, ListItem } from 'react-toolbox/lib/list';
import { toggleRightSideBar } from '../../actions';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import style from './mainLayout.scss';
import routes, { friendlyNames as routeFriendlyNames } from '../../constants/routes';

const mapStateToProps = ({ navDrawerOpen }) => ({
  navDrawerOpen,
});
const mapDispatchToProps = dispatch => ({
  onToggleSidebar: () => dispatch(toggleRightSideBar()),
});
export class MainLayout extends Component {
  render() {
    const { children, location: { pathname }, navDrawerOpen, onToggleSidebar } = this.props;

    return (
      <Layout>
        <NavDrawer active={navDrawerOpen} onOverlayClick={onToggleSidebar}>
          <List selectable ripple>
            {reduce(routes, (ListItems, v, k) => {
              ListItems.push(
                <ListItem
                  to={`#${k.toLowerCase()}`}
                  key={`link-to-${v}`}
                  disabled={v.toLowerCase() === pathname.substr(1).toLowerCase()}
                >
                  <span>{routeFriendlyNames[k]}</span>
                </ListItem>,
                            );
              return ListItems;
            }, [])}
          </List>
        </NavDrawer>
        <Panel scrollY>
          <MainHeader onToggleSideBar={onToggleSidebar} />
          <div className={style.mainContainer}>
            <ReactCSSTransitionGroup
              component="div"
              className={style.mainWrapper}
              transitionName={'page-transition'}
              transitionEnterTimeout={600}
              transitionLeaveTimeout={300}
              transitionAppear
              transitionAppearTimeout={500}
            >
              {React.cloneElement(children, {
                key: pathname.replace(/\//g, ''),
              })}
            </ReactCSSTransitionGroup>
          </div>
          <MainFooter />
        </Panel>
      </Layout>
    );
  }
}
MainLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  navDrawerOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,

};
MainLayout.childContextTypes = {
  store: PropTypes.object,
};
MainLayout.contextTypes = {
  store: PropTypes.object,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayout);
