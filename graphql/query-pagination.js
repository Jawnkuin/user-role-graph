import forEach from 'lodash/forEach';
import {
  GraphQLInt
} from 'graphql';


export const paginationQueryArgs = {
  role: {
    name: 'role',
    type: GraphQLInt
  }
};

function parseFilterOperation (op) {
  const result = {};
  forEach(op, (value, key) => {
    result[`$${key}`] = value;
  });
  return result;
}

export function searchQuery (find, params) {
  const and = [];

  // Search
  if (params.search && params.s) {
    and.push({
      [params.search]: new RegExp(`.*${params.s}`, 'i')
    });
  }

  // Filters
  if (params.filters && params.filters.constructor === Array) {
    forEach(params.filters, (filter) => {
      and.push({
        [filter.property]: parseFilterOperation(filter.op)
      });
    });
  }

  // apply and operator with all the filters
  if (and.length > 0) {
    Object.assign(find, {
      $and: and
    });
  }

  return find;
}

export function paginateQuery (query, params) {
  if (params.sort) {
    query.sort({
      [params.sort]: params.order || 'asc'
    });
  }
  if (params.page && params.limit) {
    query.skip((params.page - 1) * params.limit);
  }
  if (params.limit) {
    query.limit(params.limit);
  }
}
