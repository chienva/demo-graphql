// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Demo type
const DemoType = new GraphQLObjectType({
    name: 'demo',
    description: '...',

    fields: () => ({
        id: { type: GraphQLInt },
        caption: { type: GraphQLString },
        content: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default DemoType