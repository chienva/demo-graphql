// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import DemoType from '../type'
import { create, remove } from '../resolvers'

// Create
export const demoCreate = {
    type: DemoType,
    args: {
        caption: {
            name: 'caption',
            type: GraphQLString
        },

        content: {
            name: 'content',
            type: GraphQLString
        }
    },
    resolve: create
}

// Remove
export const demoRemove = {
    type: DemoType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}