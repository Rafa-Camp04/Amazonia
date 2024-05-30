import csrfFetch from "./csrf";

// Action types
const GET_PRODUCTS = 'product/getProducts'

// Thunk actions
export const setProducts = (productsData) => ({
    type: GET_PRODUCTS,
    payload: productsData
})

export const indexProducts = () => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/products`);
        const data = await response.json();
        dispatch(setProducts(data))
        return response;
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
}

const preloadedState = {
    products: null
}

// Reducer
const productReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
}

export default productReducer;