import csrfFetch from "./csrf";

// Action types
const ADD_CART_ITEM = 'cart/addCartItem'
const GET_CART_ITEMS = 'cart/getCartItems'
const UPDATE_CART_ITEM = 'cart/updateCartItem'
const DELETE_CART_ITEM = 'cart/deleteCartItem'

// Action creators
export const addItem = (cart_item) => ({
    type: ADD_CART_ITEM,
    payload: cart_item
})

export const setCartItems = (cart_items) => ({
    type: GET_CART_ITEMS,
    payload: cart_items
})

export const updateCartItem = (cart_item) => ({
    type: UPDATE_CART_ITEM,
    payload: cart_item
})

export const removeCartItem = (cart_item) => ({
    type: DELETE_CART_ITEM,
    payload: cart_item
})

// Thunk actions

export const createCartItem = (item) => async (dispatch) => {
    const product_id = item.id;
    const quantity = 1;
    const response = await csrfFetch('/api/cart_items', {
      method: 'POST',
      body: JSON.stringify({
        product_id,
        quantity
      })
    })
    const data = await response.json();
    dispatch(addItem(data));
    return response
}

export const indexCartItems = () => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/cart_items`);
        const data = await response.json();
        dispatch(setCartItems(data))
        return response;
    } catch (error) {
        console.error('Error fetching cart_items:', error);
        throw error;
    }
}

export const updateCartItemQuantity = (item, newQuantity) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${item.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            quantity: newQuantity
        })
    });

    const data = await response.json();
    dispatch(updateCartItem(data));
    return response;
};

export const deleteCartItem = (item) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${item.id}`, {
        method: 'DELETE'
      });
      dispatch(removeCartItem(item));
      return response;
}

// Reducer
const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {...state, ...action.payload};
        case GET_CART_ITEMS:
            return {...action.payload}
        case UPDATE_CART_ITEM:
            return { ...state, ...action.payload };
        case DELETE_CART_ITEM:
            const nextState = {...state};
            delete nextState[action.payload.id];
            return nextState
        default:
            return state;
    }
};

export default cartReducer;