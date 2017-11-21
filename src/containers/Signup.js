import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();
        
    }

    render(){
        return (
            <div>
                <h1>Fwitter Signup</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} id="email" />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} id="password" />
                    <input type="submit" value="sign up" />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Signup);