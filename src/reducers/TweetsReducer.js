export default function TweetsReducer(state = {loading: false, tweets: []}, action){
    switch (action.type) {
        case "LOADING_TWEETS":
            return Object.assign({}, state, {loading: true});
        case "GET_TWEETS":
            return Object.assign({}, state, {loading: false, tweets: action.payload});
        case "ADD_TWEET":
            return Object.assign({}, state, {loading: false, tweets: [action.payload, ...state.tweets]});
        default:
            return state;
    }
}