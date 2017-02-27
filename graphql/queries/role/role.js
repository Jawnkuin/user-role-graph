import {GraphQLInt} from 'graphql';
import roleType from '../../types/role';
import RoleModel from '../../../model/role';


export default {
  type: roleType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve (root, params) {
    let id = params.id;
    if (!id) {
      id = 1;
    }
    return RoleModel.findOne({id});
  }
};
