export default function UserReducer(state={loading: false, errors: [], currentUser: null, users: []}, action){
    switch(action.type){
        case "LOADING":
            return Object.assign({}, state, {loading: true});
        case "SIGN_UP":
            if(state.users.find(u => action.payload.email === u.email)){
                return Object.assign({}, state, {loading: false, errors: ['Email Taken']});
            } else {
                return Object.assign({}, state, {loading: false, currentUser: action.payload, users: [...state.users, action.payload]});
            }
        default:
            return state;
    }
}