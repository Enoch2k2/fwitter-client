import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render(){
        return(
            <div>
                Home Page
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(HomePage);