import Immutable from 'immutable';
import {UsersActions, RolesActions} from '../actions';

const iMap = Immutable.Map;
const immutableState = iMap({
  fetching: false,
  data: iMap({
    roles: iMap({}),
    users: iMap({})
  })
});

export const queryUsersReducer = (state = immutableState, action) => {
  switch (action.type) {
    case UsersActions.REQUEST_USERS:
      return state.set('fetching', true);
    case UsersActions.RECEIVE_USERS:
      return state.set('fetching', false)
      .data.set('users', iMap(action.users));
    default:
      return state;
  }
};

export const queryRolesReducer = (state = immutableState, action) => {
  switch (action.type) {
    case RolesActions.REQUEST_ROLES:
      return state.set('fetching', true);
    case RolesActions.RECEIVE_ROLES:
      return state.set('fetching', false)
      .data.set('roles', iMap(action.roles));
    default:
      return state;
  }
};
