import { GraphQLInt, GraphQLList } from 'graphql'
import DemoType from '../type'
import { getAll, getById } from '../resolvers'

// Get By All
export const demos = {
    type: new GraphQLList(DemoType),
    resolve: getAll
}

// Get By ID
export const demo = {
    type: DemoType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: getById
}