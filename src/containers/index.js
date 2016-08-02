/**
 * Created by vnguyen on 7/26/16.
 */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'react-toolbox/lib/app_bar';
import 'react-toolbox/lib/app_bar/theme.scss';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

require('./index.scss');

const App = () => (
    <AppBar fixed flat>
        <Button label="Home" icon='bookmark' href="#Home"/>

    </AppBar>
);
render();

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("content")
    );
}