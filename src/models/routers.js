import _ from 'lodash';

const UserModel = {
  namespace: 'routers',
  state: {
    routers: [],
    currentRouter: {},
  },
  effects: {},
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default UserModel;
