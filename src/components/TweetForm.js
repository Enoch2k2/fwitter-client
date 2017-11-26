import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTweet } from '../actions';

class TweetForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTweet({
            content: this.state.content,
            user_id: this.props.currentUser.id
        })
        this.setState({content: ''});
    }

    handleChange = e => {
        const { name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea name="content" value={this.state.content} onChange={(e) => this.handleChange(e)} /><br />
                <input type="submit" value="Create Tweet" />
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.session.currentUser
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTweet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetForm);