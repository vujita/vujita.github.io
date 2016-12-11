/**
 * Created by vnguyen on 8/4/16.
 */
/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => (action) => {
  const { getState } = store;
  const beforeActionState = getState();
  const result = next(action);
  const afterActionState = getState();
  console.info('action', action, 'beforeState', beforeActionState, 'afterState', afterActionState);
  return result;
};
export default logger;
