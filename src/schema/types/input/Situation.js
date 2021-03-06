import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLList,
} from 'graphql';
import { ConditionInputType } from './index';

const Type = new GraphQLInputObjectType({
  name: 'SituationInput',
  description: 'Payload for situation input',
  fields: () => ({
    name: { type: GraphQLString },
    conditions: { type: new GraphQLList(ConditionInputType) },
  }),
});

export default Type;
