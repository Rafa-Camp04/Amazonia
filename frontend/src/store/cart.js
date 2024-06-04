import csrfFetch from "./csrf";

// Action types
const ADD_CART_ITEM = 'cart/addCartItem'

// Action creators
export const addItem = (item) => ({
    type: ADD_CART_ITEM,
    payload: item
})

// Thunk actions
export const addToCart = (item) => async (dispatch) => {
    const product_id = item.id;
    const custumer_id = 2;
    const quantity = 1;

    const response = await csrfFetch('/api/cart_items', {
      method: 'POST',
      body: JSON.stringify({
        product_id,
        custumer_id,
        quantity
      })
    })
    const data = await response.json();
    dispatch(addItem(data.cart_item));
    return response
}

// Reducer
const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {...state, cartItem: action.payload};
        default:
            return state;
    }
};

export default cartReducer;