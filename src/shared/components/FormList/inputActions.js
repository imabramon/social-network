export const InputActionsType = {
  add: 'add',
  remove: 'remove',
  change: 'change',
};

export const inputActions = {
  add: (value = '') => ({
    type: InputActionsType.add,
    payload: { value },
  }),
  remove: (index) => ({
    type: InputActionsType.remove,
    payload: { index },
  }),
  change: (index, value) => ({
    type: InputActionsType.change,
    payload: { index, value },
  }),
};
