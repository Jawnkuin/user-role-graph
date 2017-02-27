import {GraphQLList} from 'graphql';
import userType from '../../types/user';
import {paginationQueryArgs} from '../../query-pagination';
import UserModel from '../../../model/user';
import RoleModel from '../../../model/role';

export default {
  type: new GraphQLList(userType),
  args: {
    ...paginationQueryArgs
  },
  async resolve (root, params) {
    if (!params.role) {
      return UserModel.find();
    }
    const role = await RoleModel.findOne({id: params.role}).exec();
    const users = await UserModel.find({roles: role.id}).exec();
    return users;
  }
};
