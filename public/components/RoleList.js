import React, {PropTypes} from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import URItem from './URItem';

const RoleList = ({roles, onTodoClick}) => (
  <List>
    <Subheader>Roles</Subheader>
    {roles.map(role =>
      <URItem
        key={role.id}
        itemName={role.name}
        onClick={() => onTodoClick(role.id)}
      />
    )}
  </List>
);


RoleList.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default RoleList;
