// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as demo from './demos/fields/query'

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        ...demo
    })
})

export default query