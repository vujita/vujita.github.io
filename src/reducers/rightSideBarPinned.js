/**
 * Created by vnguyen on 8/5/16.
 */
import {TOGGLE_RIGHT_SIDE_BAR} from '../constants/actionTypes';

export default function (state = true, action = {type: ''}) {
    let {type} = action;
    switch (type) {
        case TOGGLE_RIGHT_SIDE_BAR:
            state = !state;
    }
    return state;
}