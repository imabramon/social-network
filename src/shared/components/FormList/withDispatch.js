export const withDispatch = (actions, dispath) => {
  const dispatchedActions = {};
  for (const [key, value] of Object.entries(actions)) dispatchedActions[key] = (...args) => dispath(value(...args));
  return dispatchedActions;
};
