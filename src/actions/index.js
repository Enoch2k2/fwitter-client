// use fetch to make api calls

import "whatwg-fetch";
const api = 'http://localhost:3001'
// sessions

export function signup(user) {
    return dispatch => {
        dispatch({type: "LOADING"})
        return fetch(`${api}/users`, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
          .then(res => res.json())
          .then(payload => dispatch({type: "SIGN_UP", payload}))
    }
}

export function login(user) {
    return dispatch => {
        dispatch({type: "LOADING"});
        return fetch(`${api}/login`, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
          .then(res => res.json())
          .then(payload => dispatch({type: "LOG_IN", payload}))
    }
}

export function getUsers(){
    return dispatch => {
        dispatch({type: "LOADING"});
        return fetch(`${api}/users`)
            .then(res => res.json())
            .then(payload => dispatch({type: "GET_USERS", payload}));
    }
}

export function getUser(id){
    return dispatch => {
        dispatch({type: "LOADING"})
        return fetch(`${api}/users/${id}`)
            .then(res => res.json())
            .then(payload => dispatch({type: "GET_USER", payload}))
    }
}

export function getCurrentUser(){
    return dispatch => {
        dispatch({type: "LOADING"});
        return dispatch({type: "GET_CURRENT_USER"});
    }
}

export function logout(){
    return dispatch => {
        return dispatch({type: "LOGOUT"});
    }
}

// tweets

export function getTweets(){
    return dispatch => {
        dispatch({type: "LOADING_TWEETS"});
        return fetch(`${api}/tweets`)
            .then(res => res.json())
            .then(payload => dispatch({type: "GET_TWEETS", payload}))
    }
}

export function addTweet(tweet){
    return dispatch => {
        dispatch({type: "LOADING_TWEETS"})
        return fetch(`${api}/tweets`, {
            method: 'POST',
            body: JSON.stringify({tweet}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
          .then(res => res.json())
          .then(payload => dispatch({type: "ADD_TWEET", payload}))
    }
}

export function editTweet(tweet){
    return dispatch => {
        return dispatch({type: "EDIT_TWEET", payload: tweet});
    }
}

export function deleteTweet(tweet){
    return dispatch => {
        return dispatch({type: "DELETE_TWEET", payload: tweet});
    }
}