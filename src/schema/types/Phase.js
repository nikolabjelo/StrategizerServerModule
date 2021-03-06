import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import {
  SituationType,
} from './index';

const Type = new GraphQLObjectType({
  name: 'Phase',
  description: 'Phase definition',
  fields: () => ({
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    situations: {
      type: new GraphQLList(SituationType),
      resolve(parent) {
        return parent.situations;
      },
    },
  }),
});

export default Type;
