// import fetch from 'isomorphic-fetch';

// export const SELECT_USER = 'SELECT_USER';
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_INIT_USERS = 'REQUEST_INIT_USERS';
export const RECEIVE_INIT_USERS = 'RECEIVE_INIT_USERS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_INIT_USERS = 'FETCH_INIT_USERS';

export const receiveUsers = users => (
  {
    type: RECEIVE_USERS,
    users
  }
);

export const requestUsers = uid => (
  {
    type: REQUEST_USERS,
    uid
  }
);

export const receiveInitUsers = () => (
  {
    type: RECEIVE_USERS
  }
);

export const requestInitUsers = () => (
  {
    type: REQUEST_USERS
  }
);

export const fetchUsers = (uid) => {
  const queryQl = `query={user(id:${uid}){id,name,roles{id,name}}}`;
  return (dispatch) => {
    dispatch(requestUsers(uid));
    return new Promise((resolve) => {
      const request = new XMLHttpRequest();
      request.open('POST', '/graphql', true);
      request.setRequestHeader('Content-Type',
                               'application/graphql');
      request.send(queryQl);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText);
        }
      };
    }).then(response =>
            dispatch(receiveUsers(JSON.parse(response).data.user)));
  };
};
