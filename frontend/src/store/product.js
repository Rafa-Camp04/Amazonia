import csrfFetch from "./csrf";

// Action types
const GET_ITEM = 'product/getItem'
const GET_PRODUCTS = 'product/getProducts'

// Action creators
export const setItem = (item) => ({
    type: GET_ITEM,
    payload: item
})

export const setProducts = (productsData) => ({
    type: GET_PRODUCTS,
    payload: productsData
})

// Thunk actions
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
        console.error('Error fetching item:', error);
        throw error;
    }
}

const preloadedState = {
    products: null,
    item: null
}

//Reducer
const productReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case GET_ITEM: 
            return {...state, item: action.payload};
        case GET_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
}

export default productReducer;