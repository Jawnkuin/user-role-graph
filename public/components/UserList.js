import React, {PropTypes} from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import URItem from './URItem';

const UserList = ({users, onTodoClick}) => (
  <List>
    <Subheader>Users</Subheader>
    {users.map(user =>
      <URItem
        key={user.id}
        itemName={user.name}
        onClick={() => onTodoClick(user.id)}
      />
    )}
  </List>
);


UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default UserList;
