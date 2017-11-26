import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        if (this.props.currentUser) {
            this.props.history.push("/tweets");
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.props.history.push("/tweets");
    }

    render(){
        return (
            <div>
                <h1>Fwitter Login</h1>
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
        currentUser: state.session.currentUser,
        users: state.session.users,
        errors: state.session.errors
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);