import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addLead } from './actions/leads'


export class Form extends Component {

    state = {
        name : '',
        email : '',
        message : ''
    }

    static propTypes = {
        addLead : PropTypes.func.isRequired,
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const { name , email, message  } = this.state;
        const lead = { name : name, email : email, message : message}
        this.props.addLead(lead);
        this.setState({
            name : "",
            email : "",
            message : ""
        })
    }

    render() {
        const { name , email, message } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
                <h1>Add Lead</h1>
                <form action="this.onSubmit">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" 
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                            className="form-control" 
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>message</label>
                        <input type="text" 
                            className="form-control"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <button 
                        className="btn-primary"
                        onClick={this.onSubmit}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);
