/**
 * Created by vnguyen on 8/4/16.
 */
const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        //This will not trigger when the chrome redux extension takes control
        console.error(
            'Uncaught exception:', err,
            '/naction:', JSON.stringify(action, null, 2),
            '/nstate', JSON.stringify(store.getState(), null, 2)
        )
    }
}
export default crashReporter;