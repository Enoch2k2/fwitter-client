export default function SessionReducer(state={loading: false, errors: [], currentUser: null, token: '', users: [], user: null}, action){
    switch(action.type){
        case "LOADING":
            return Object.assign({}, state, {loading: true});
        case "SIGN_UP":
            if(action.payload.errors){
                return Object.assign({}, state, {loading: false, errors: action.payload.errors});
            } else {
                let newState =  Object.assign({}, state, {loading: false, errors: [], currentUser: action.payload, users: [...state.users, action.payload]});
                localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
                return newState;
            }
        case "LOG_IN":
            if (action.payload.errors){
                return Object.assign({}, state, {loading: false, errors: action.payload.errors});
            } else {
                let newState = Object.assign({}, state, {loading: false, errors: [], currentUser: action.payload});
                localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
                return newState;
            }
        case "LOGOUT":
            localStorage.removeItem('currentUser');
            return Object.assign({}, state, {loading: false, currentUser: null});
        case "GET_USERS":
            return Object.assign({}, state, {loading: false, users: action.payload});
        case "GET_USER":
            if(action.payload.errors){
                return Object.assign({}, state, {loading: false, errors: action.payload});
            } else {
                return Object.assign({}, state, {loading: false, user: action.payload});
            }
        case "GET_CURRENT_USER":
            let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
            return Object.assign({}, state, {loading: false, currentUser});
        default:
            return state;
    }
}