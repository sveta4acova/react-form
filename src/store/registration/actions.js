export const types = {
  UPDATE: Symbol('UPDATE'),
};

const actions = {
  update: data => ({
    type: types.UPDATE,
    payload: data,
  }),
};

export default actions;
