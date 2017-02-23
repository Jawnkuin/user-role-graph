import {GraphQLInt} from 'graphql';
import userType from '../../types/user';


export default {
  type: userType,
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
    return root.data.getUser(id);
  }
};
