import fetch from 'isomorphic-fetch';

// export const SELECT_USER = 'SELECT_USER';
export const REQUEST_ROLES = 'REQUEST_USERS';
export const RECEIVE_ROLES = 'RECEIVE_USERS';

export const receiveRoles = uid => (
  {
    type: RECEIVE_ROLES,
    uid
  }
);

export const requestRoles = uid => (
  {
    type: REQUEST_ROLES,
    uid
  }
);
