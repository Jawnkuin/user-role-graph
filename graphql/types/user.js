import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import RoleModel from '../../model/role';
import roleType from './role';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    roles: {
      type: new GraphQLList(roleType),
      resolve (parent) {
        const roles = RoleModel.find({id: {
          $in: parent.roles
        }});
        return roles;
      }
    }
  }
});

export default userType;
