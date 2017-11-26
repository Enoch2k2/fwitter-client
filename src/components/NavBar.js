import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

class NavBar extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    }

    render() {
        const {currentUser} = this.props;
        return (
            <nav>
                {currentUser ? <Link to="/logout" onClick={this.handleLogout}>Logout</Link>: null}
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {session: state.session};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({logout}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);