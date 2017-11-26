import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Tweets extends Component {
    componentDidMount(){
        if(!this.props.currentUser){
            this.props.history.push("/");
        }
    }

    render(){
        return (
            <div>
                Tweets Page
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.session.currentUser,
        users: state.session.users,
        tweets: state.tweets.tweets
    }
}

export default connect(mapStateToProps)(Tweets);