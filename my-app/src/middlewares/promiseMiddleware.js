const promiseMiddleware = store => next => action => {
  if (action instanceof Promise) {
    return action.then(actionObj => store.dispatch(actionObj));
  }
  return next(action);
};

export default promiseMiddleware;