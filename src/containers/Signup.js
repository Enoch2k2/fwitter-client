import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
    render(){
        return (
            <div>
                Signup
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Signup);