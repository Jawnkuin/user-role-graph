import {GraphQLList} from 'graphql';
import userType from '../../types/user';
import {paginationQueryArgs} from '../../query-pagination';

export default {
  type: new GraphQLList(userType),
  args: {
    ...paginationQueryArgs
  },
  resolve (root, params) {
    if (!params.role) {
      return root.data.db.users;
    }
    return root.data.getUsersByRoles(params.role);
  }
};
