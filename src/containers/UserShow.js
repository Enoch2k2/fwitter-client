import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions';
import { Loading, Tweet } from '../components';

class UserShow extends Component {
    componentDidMount(){
        if(!this.props.currentUser){
            this.props.history.push("/");
        }
        if(!this.props.user || this.props.user.id !== parseInt(this.props.match.params.id,10)){
            this.props.getUser(this.props.match.params.id);
        }
    }

    render(){
        const { user } = this.props;
        let tweets;
        if(user){
            tweets = user.tweets.sort((a, b) => b.id - a.id).map((tweet, i) => {
                return <Tweet key={tweet.id} tweet={tweet} user={user} current_user_id={this.props.currentUser.id} />
        })
        }
        return (
            <div>
                { user ? <h1>{user.username}</h1> : <Loading />}
                <h3><Link to="/tweets">Tweets</Link></h3>
                {tweets ? tweets : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.session.currentUser,
        user: state.session.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);