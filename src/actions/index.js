export function signup(user) {
    return dispatch => {
        return dispatch({type: "SIGN_UP", payload: user});
    }
}