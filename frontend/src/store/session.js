import csrfFetch from './csrf'

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


const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  };
  
  export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
  };

  export const signup = (user) => async (dispatch) => {
    const {email, password} = user;
    const res = await csrfFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json();
    dispatch(setSessionUser(data.user));
    return res
  }
  
  export const login = ({ email, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
  };

  export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE'
    });
    dispatch(removeSessionUser());
    return response;
  }

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