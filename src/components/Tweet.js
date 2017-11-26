import React, { Component } from 'react';

class Tweet extends Component {
    render(){
        return (
            <div>
                <h3>{this.props.tweet.user_id} says </h3>
                <p>{this.props.tweet.content}</p>
            </div>
        )
    }
}

export default Tweet;