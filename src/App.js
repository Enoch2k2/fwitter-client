import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavBar, Loading } from './components';
import { HomePage, Signup, Login, Tweets } from './containers';
import { Switch, Route } from 'react-router-dom';
import { getUsers, getCurrentUser } from './actions';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getUsers();
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        {!this.props.loading ? <NavBar history={this.props.history} currentUser={this.props.currentUser}/> : <Loading />}
        {!this.props.loading ? <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tweets" component={Tweets} />
        </Switch> : null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.session.currentUser,
    users: state.session.users,
    errors: state.session.errors,
    loading: state.session.loading
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUsers, getCurrentUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
