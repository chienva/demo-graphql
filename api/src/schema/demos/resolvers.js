// App Imports
import models from '../../models'

// Get by ID
export async function getById(parentValue, { id }) {
    return await models.Demo.findOne({ where: { id }})
}

// Get all
export async function getAll() {
    return await models.Demo.findAll()
}

// Create
export async function create(parentValue, { caption, content }) {
    return await models.Demo.create({
        caption,
        content
    })
}

// Delete
export async function remove(parentValue, { id }) {
    return await models.Demo.destroy({ where: { id }})
}