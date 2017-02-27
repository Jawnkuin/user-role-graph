import React, {PropTypes} from 'react';
import ListItem from 'material-ui/List';

const URItem = ({onClick, itemName}) => (
  <ListItem onClick={onClick} primaryText={itemName} />
);

URItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired
};

export default URItem;
