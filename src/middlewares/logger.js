/**
 * Created by vnguyen on 8/4/16.
 */
/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
    let {getState} = store,
        beforeActionState = getState(),
        result = next(action),
        afterActionState = getState();
    console.info('action', action, 'beforeState', beforeActionState, 'afterState', afterActionState);
    return result;
}
export default logger;
function stringifyObj(o) {
    return JSON.stringify(o, null, 2);
}