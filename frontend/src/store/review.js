import csrfFetch from "./csrf";

// Action types
const GET_REVIEWS = 'cart/getReviews'
const CREATE_REVIEW = 'cart/createReview'
const UPDATE_REVIEW = 'cart/updateReview'
const DELETE_REVIEW = 'cart/deleteReview'

// Action creators
export const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews,
});

export const newReview = (review) => ({
    type: CREATE_REVIEW,
    payload: review
})

export const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    payload: review
})

export const removeReview = (review) => ({
    type: DELETE_REVIEW,
    payload: review
})

// Thunk actions
export const indexReviews = () => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/reviews`);
        const data = await response.json();
        dispatch(getReviews(data))
        return response;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}

export const createReview = (review, product_id) => async (dispatch) => {

    const {title, body, rating} = review

    const response = await csrfFetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        rating,
        product_id
      })
    })

    const data = await response.json();
    dispatch(newReview(data));
    return response
}

export const updateCartItemQuantity = (review, newTitle, newBody, newRating) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: newTitle,
            body: newBody,
            rating: newRating
        })
    });

    const data = await response.json();
    dispatch(updateReview(data));
    return response;
};

export const deleteCartItem = (review) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'DELETE'
      });
      dispatch(removeReview(review));
      return response;
}

// Reducer
const reviewReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case GET_REVIEWS:
            return { ...state, ...action.payload }
        case CREATE_REVIEW:
            return {...state, ...action.payload};
        case UPDATE_REVIEW:
            return { ...state, ...action.payload };
        case DELETE_REVIEW:
            delete nextState[action.payload.id];
            return nextState
        default:
            return state;
    }
};

export default reviewReducer;