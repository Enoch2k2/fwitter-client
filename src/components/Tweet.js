import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tweet extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h3><Link to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link> says </h3>
                <p>{this.props.tweet.content}</p>
            </div>
        )
    }
}

export default Tweet;