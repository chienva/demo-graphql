// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { create } from './api/actions'
import { messageShow, messageHide } from '../common/api/actions'

// Component
class Create extends Component {

    constructor(props) {
        super(props)

        this.state = {
            caption: '',
            content: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()

        // Hide old messages
        this.props.messageHide()

        this.props.messageShow('Creating, please wait...')

        // Call API
        this.props.create(this.state)
            .then(response => {
                this.setState({
                    caption: '',
                    content: '',
                })

                this.props.messageShow('Created successfully.')
            })
            .catch(error => {
                this.props.messageShow('Error creating. Please try again.')
            })
    }

    render() {
        return(
            <div>
                <h1>Demo Create</h1>

                <p>
                    <Link to={ routes.home.list }>Back</Link>
                </p>

                {/* Form */}
                <form onSubmit={ this.submit }>
                    {/* Name */}
                    <input
                        type="text"
                        name="caption"
                        placeholder="Your name"
                        required="required"
                        value={ this.state.caption }
                        onChange={ this.onChange }
                    />

                    <br /><br />

                    <textarea
                        name="content"
                        placeholder="Your content"
                        required="required"
                        value={ this.state.content }
                        onChange={ this.onChange }
                    />

                    <br /><br />
                    
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

// Component Properties
Create.propTypes = {
    create: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired
}

export default connect(null, { create, messageShow, messageHide })(Create)