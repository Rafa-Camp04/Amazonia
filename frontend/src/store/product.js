import csrfFetch from "./csrf";

// Action types
const GET_PRODUCT = 'product/getItem'
const GET_PRODUCTS = 'product/getProducts'

// Thunk actions
export const setItem = (item) => ({
    type: GET_PRODUCT,
    payload: item
})

export const setProducts = (productsData) => ({
    type: GET_PRODUCTS,
    payload: productsData
})

export const showItem = (id) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/products/${id}`);
        const data = await response.json();
        dispatch(setItem(data))
        return response;
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
}

export const indexProducts = () => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/products`);
        const data = await response.json();
        dispatch(setProducts(data))
        return response;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

// Reducer
const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, [action.payload.product.id]: action.payload.product}
        case GET_PRODUCTS:
            return {...action.payload};
        default:
            return state;
    }
}

export default productsReducer;