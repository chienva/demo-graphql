// Imports
import axios from 'axios'

// App Imports
import { routesApi } from '../../../setup/routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const DEMOS_GET_LIST_REQUEST = 'DEMOS/GET_LIST_REQUEST'
export const DEMOS_GET_LIST_RESPONSE = 'DEMOS/GET_LIST_RESPONSE'
export const DEMOS_GET_LIST_FAILURE = 'DEMOS/GET_LIST_FAILURE'
export const DEMOS_GET_REQUEST = 'DEMOS/GET_REQUEST'
export const DEMOS_GET_RESPONSE = 'DEMOS/GET_RESPONSE'
export const DEMOS_GET_FAILURE = 'DEMOS/GET_FAILURE'

// Actions

// Get list
export function getList(isLoading = true) {
    return dispatch => {
        dispatch({
            type: DEMOS_GET_LIST_REQUEST,
            isLoading
        })

        return axios.post(routesApi, queryBuilder({ type: 'query', operation: 'demos', fields: ['id', 'caption', 'content'] }))
            .then((response) => {
                dispatch({
                    type: DEMOS_GET_LIST_RESPONSE,
                    error: null,
                    list: response.data.data.demos
                })
            })
            .catch((error) => {
                dispatch({
                    type: DEMOS_GET_LIST_FAILURE,
                    error: error
                })
            })
    }
}

// Get single data
export function get(id, isLoading = true) {
    return dispatch => {
        dispatch({
            type: DEMOS_GET_REQUEST,
            isLoading
        })

        return axios.post(routesApi, queryBuilder({ type: 'query', operation: 'demo', data: { id: parseInt(id, 10) }, fields: ['id', 'caption', 'content'] }))
            .then((response) => {
                dispatch({
                    type: DEMOS_GET_RESPONSE,
                    error: null,
                    item: response.data.data.demo
                })
            })
            .catch((error) => {
                dispatch({
                    type: DEMOS_GET_FAILURE,
                    error: error
                })
            })
    }
}

// Create
export function create(data) {
    return dispatch => {
        return axios.post(routesApi, queryBuilder({ type: 'mutation', operation: 'demoCreate', data, fields: ['id'] }))
    }
}

// Remove
export function remove(data) {
    return dispatch => {
        return axios.post(routesApi, queryBuilder({ type: 'mutation', operation: 'demoRemove', data, fields: ['id'] }))
    }
}
