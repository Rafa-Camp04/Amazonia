import { csrfFetch } from './csrf';

// Action types
const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';


// Action creators
export const setSessionUser = (user) => ({
    type: SET_SESSION_USER,
    payload: user
})

export const removeSessionUser = () => ({
    type: REMOVE_SESSION_USER
})


// Thunk Action
export const login = ({email, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({email, password})
    });

    if (res.ok) {
        const data = res.json();
        dispatch(setSessionUser(data.user));
    }

};

const preloadedState = {
    user: null
};


// Reducer
const sessionReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case SET_SESSION_USER:
            return {...state, user: action.payload};
        case REMOVE_SESSION_USER:
            return {...state, user: null};
        default:
            return state;
    }
};

export default sessionReducer;