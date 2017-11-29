// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { get } from './api/actions'
import Loading from '../common/Loading'

// Component
class View extends Component {

    componentDidMount() {
        this.props.get(this.props.match.params.id)
    }

    render() {
        return(
            <div>
                <h1>Detail</h1>

                <p>
                    <Link to={ routes.home.list }>Back</Link>
                </p>

                {
                    this.props.demo.isLoading
                        ?
                    <Loading message="loading details..." />
                        :
                    (
                        this.props.demo.item.id > 0
                            ?
                        <div>
                            <h1>"{ this.props.demo.item.content }"</h1>
                            <h4> - { this.props.demo.item.caption }</h4>
                        </div>
                            :
                        <p>Record does not exists.</p>
                    )
                }
            </div>
        )
    }
}

// Component Properties
View.propTypes = {
    demo: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
}

// Component State
function viewState(state) {
    return {
        demo: state.demo
    }
}

export default connect(viewState, { get })(View)