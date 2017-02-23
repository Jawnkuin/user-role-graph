import clone from 'lodash/clone';
import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';
import queries from './queries';

class SchemaManager {
  constructor () {
    this.init();
  }

  init () {
    this.queryFields = clone(queries);
    this.createRoot();
  }


  createRoot () {
    this.rootQuery = new GraphQLObjectType({
      name: 'Query',
      fields: () => (this.queryFields)
    });
  }

  getSchema () {
    const schema = {
      query: this.rootQuery
    };

    return new GraphQLSchema(schema);
  }
}

export default new SchemaManager();
