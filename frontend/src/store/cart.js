import csrfFetch from "./csrf";
import { useSelector } from "react-redux";

// Action types
const ADD_CART_ITEM = 'cart/addCartItem'
const GET_CART_ITEMS = 'cart/getCartItems'
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

export const removeCartItem = (cart_item) => ({
    type: DELETE_CART_ITEM,
    payload: cart_item
})

// Thunk actions
export const createCartItem = (item) => async (dispatch) => {

    const product_id = item.id;
    const customer_id = sessionUser.id;
    const quantity = 1;

    const response = await csrfFetch('/api/cart_items', {
      method: 'POST',
      body: JSON.stringify({
        product_id,
        customer_id,
        quantity
      })
    })

    debugger

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

export const deleteCartItem = (item) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${item.id}`, {
        method: 'DELETE'
      });
      dispatch(removeCartItem());
      return response;
}

// Reducer
const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {...state, [action.payload.cart_item.id]: action.payload};
        case GET_CART_ITEMS:
            return {...action.payload}
        case DELETE_CART_ITEM:
            delete {...state}[action.payload.cart_item.id]
            return state
        default:
            return state;
    }
};

export default cartReducer;