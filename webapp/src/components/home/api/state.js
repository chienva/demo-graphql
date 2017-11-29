import {
    DEMOS_GET_LIST_REQUEST,
    DEMOS_GET_LIST_RESPONSE,
    DEMOS_GET_LIST_FAILURE,
    DEMOS_GET_REQUEST,
    DEMOS_GET_RESPONSE,
    DEMOS_GET_FAILURE,
} from './actions'
// Initial State
const demosInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export const demos = (state = demosInitialState, action) => {
    switch (action.type) {
        case DEMOS_GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }

        case DEMOS_GET_LIST_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                list: action.list
            }

        case DEMOS_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

// Initial State
const demoInitialState = {
    isLoading: false,
    error: null,
    item: {}
}

// State
export const demo = (state = demoInitialState, action) => {
    switch (action.type) {
        case DEMOS_GET_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }

        case DEMOS_GET_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                item: action.item
            }

        case DEMOS_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}