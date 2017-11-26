export default function TweetsReducer(state = {loading: false, tweets: []}, action){
    switch (action.type) {
        case "GET_TWEETS":
            let tweets = localStorage.getItem('tweets') ? JSON.parse(localStorage.getItem('tweets')) : [];
            return Object.assign({}, state, {loading: false, tweets});
        case "ADD_TWEET":
            return Object.assign({}, state, {loading: false, tweets: [...state.tweets, action.payload]});
        default:
            return state;
    }
}