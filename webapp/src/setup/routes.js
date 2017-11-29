// App Imports
import { APP_URL_API } from './config'

// APP Routes
export const routes = {
    home: {
        list: '/',

        create: '/create',

        view: (id) => {
            return `/${ id }`
        }
    },
}

export const routesApi = APP_URL_API