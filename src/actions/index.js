// sessions

export function signup(user) {
    return dispatch => {
        return dispatch({type: "SIGN_UP", payload: user});
    }
}

export function login(user) {
    return dispatch => {
        return dispatch({type: "LOG_IN", payload: user});
    }
}

export function getUsers(){
    return dispatch => {
        return dispatch({type: "GET_USERS"});
    }
}

export function getCurrentUser(){
    return dispatch => {
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
        return dispatch({type: "GET_TWEETS"});
    }
}

export function addTweet(tweet){
    return dispatch => {
        return dispatch({type: "ADD_TWEET", payload: tweet});
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