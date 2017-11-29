// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { getList } from './api/actions'
import Loading from '../common/Loading'
import Item from './Item'

// Component
class List extends Component {

    componentDidMount() {
        this.props.getList()
    }

    render() {
        return(
            <div>
                <h1>List Item</h1>

                <p>
                    <Link to={ routes.home.create }>Create</Link>
                </p>

                {
                    this.props.demos.isLoading
                        ?
                    <Loading message="loading data..." />
                        :
                    (
                        this.props.demos.list.length > 0
                            ?
                        <ul>
                            { this.props.demos.list.map(demo => (
                                <li key={ demo.id }>
                                    <Item demo={ demo } />
                                </li>
                            )) }
                        </ul>
                            :
                        <p>No data to show.</p>
                    )
                }
            </div>
        )
    }
}

// Component Properties
List.propTypes = {
    demos: PropTypes.object.isRequired,
    getList: PropTypes.func.isRequired,
}

// Component State
function demosState(state) {
    return {
        demos: state.demos
    }
}

export default connect(demosState, { getList })(List)