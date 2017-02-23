import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import roleType from './role';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    roles: {
      type: new GraphQLList(roleType),
      resolve (parent, args, context, {rootValue: {data}}) {
        return data.getRoles(parent.roles);
      }
    }
  }
});

export default userType;
