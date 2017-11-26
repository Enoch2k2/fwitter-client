let emailTaken = 'Email Taken';
let emailBlank = 'Email Must Not Be Blank';
let passwordBlank = 'Password Must Not Be Blank';
let incorrectPassword = 'Password is incorrect';
let incorrectEmail = 'Email doesn\'t exist';

// check user form to make sure all fields are taken on signup
function verifySignup(state, action){
    if(state.users.find(u => action.payload.email === u.email)){
        return Object.assign({}, state, {loading: false, errors: [emailTaken]});
    } else if (action.payload.email === ''){
        if(action.payload.password === ''){
            return Object.assign({}, state, {loading: false, errors: [emailBlank, passwordBlank]});
        }
        return Object.assign({}, state, {loading: false, errors: [emailBlank]});
    } else if (action.payload.password === '') {
        return Object.assign({}, state, {errors: [passwordBlank]});
    }
}

// check user form to make sure all fields are taken on login
function verifyLogin(state, action){
    let user = state.users.find(u => action.payload.email === u.email);
    if(user){
        if(user.password !== action.payload.password){
            return Object.assign({}, state, {loading: false, errors: [incorrectPassword]});
        }
    } else if (action.payload.email === ''){
        if(action.payload.password === ''){
            return Object.assign({}, state, {loading: false, errors: [emailBlank, passwordBlank]});
        }
        return Object.assign({}, state, {loading: false, errors: [emailBlank]});
    } else if (action.payload.password === '') {
        return Object.assign({}, state, {loading: false, errors: [passwordBlank]});
    } else if (!user){
        return Object.assign({}, state, {loading: false, errors: [incorrectEmail]})
    }
}

export default function SessionReducer(state={loading: false, errors: [], currentUser: null, token: '', users: []}, action){
    switch(action.type){
        case "LOADING":
            return Object.assign({}, state, {loading: true});
        case "SIGN_UP":
            if(verifySignup(state, action)){
                return verifySignup(state, action);
            } else {
                let newState =  Object.assign({}, state, {loading: false, errors: [], currentUser: action.payload, users: [...state.users, action.payload]});
                localStorage.setItem('users', JSON.stringify(newState.users));
                localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
                return newState;
            }
        case "LOG_IN":
            if (verifyLogin(state, action)){
                return verifyLogin(state, action);
            } else {
                let newState = Object.assign({}, state, {loading: false, errors: [], currentUser: action.payload});
                localStorage.setItem('users', JSON.stringify(newState.users));
                localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
                return newState;
            }
        case "LOGOUT":
            localStorage.removeItem('currentUser');
            return Object.assign({}, state, {loading: false, currentUser: null});
        case "GET_USERS":
            let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            return Object.assign({}, state, {loading: false, users});
        case "GET_CURRENT_USER":
            let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
            return Object.assign({}, state, {loading: false, currentUser});
        default:
            return state;
    }
}