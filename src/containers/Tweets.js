import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tweet, Loading, TweetForm } from '../components';
import { getCurrentUser, getTweets } from '../actions';

class Tweets extends Component {

    componentDidMount(){
        if(!this.props.currentUser){
            this.props.history.push("/");
        }
        this.props.getTweets();
    }

    render(){
        const {tweets, currentUser, loading, tweetsLoading} = this.props;
        const tweetsList = tweets.map((tweet, i) => {
            return <Tweet key={i} tweet={tweet} user={tweet.user} current_user_id={this.props.currentUser.id} />
        })
        return (
            <div>
                { loading || !currentUser ? <Loading /> :
                <div>
                    <h3>Welcome {currentUser.username}!</h3>
                    <h3>Tweets</h3>
                    <TweetForm />
                    { tweetsLoading ? null : tweetsList }
                </div> }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.session.currentUser,
        users: state.session.users,
        loading: state.session.loading,
        tweetsLoading: state.tweets.loading,
        tweets: state.tweets.tweets
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getCurrentUser, getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);