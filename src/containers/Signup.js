import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';
import { bindActionCreators } from 'redux';

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
        this.props.signup(this.state);
        this.setState({
            email: '',
            password: ''
        });
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
        currentUser: state.user.currentUser,
        users: state.user.users,
        errors: state.user.errors
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signup}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);