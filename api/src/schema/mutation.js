// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as demo from './demos/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        ...demo
    }
})

export default mutation
