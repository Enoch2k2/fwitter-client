import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    componentDidMount(){
        if(this.props.currentUser){
            this.props.history.push("/tweets");
        }
    }

    render(){
        return(
            <div>
                <h1>Fwitter</h1>
                <h3>Welcome to Fwitter</h3>
                <hr />
                <p>Click <a href="/login">here</a> to log in.</p>
                <p>Click <a href="/signup">here</a> to sign up.</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.session.currentUser
    }
}

export default connect(mapStateToProps)(HomePage);