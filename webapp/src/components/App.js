import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../setup/routes'
import Layout from './common/Layout'
import Home from './home/List'

import Create from './home/Create'
import View from './home/View'

// Component
const App = () => (
    <Layout>
        <Switch>
            <Route path={ routes.home } component={ Home } exact />
            <Route path={ routes.home.create } component={ Create } />
            <Route path={ routes.home.view(':id') } component={ View } />
        </Switch>
    </Layout>
)

export default App