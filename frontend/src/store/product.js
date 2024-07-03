import csrfFetch from "./csrf";

// Action types
const GET_PRODUCT = 'product/getItem'
const GET_PRODUCTS = 'product/getProducts'
const SEARCH_PRODUCTS = 'product/searchProducts';

// Thunk actions
export const setItem = (item) => ({
    type: GET_PRODUCT,
    payload: item
});

export const setProducts = (productsData) => ({
    type: GET_PRODUCTS,
    payload: productsData
});

export const setSearchResults = (results) => ({
    type: SEARCH_PRODUCTS,
    payload: results
});

export const showItem = (id) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/products/${id}`);
        const data = await response.json();
        dispatch(setItem(data))
        return data;
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
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const searchProducts = (searchTerm) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/search/products?q=${searchTerm}`);
        const data = await response.json();

        dispatch(setSearchResults(data));
        return data;
    } catch (error) {
        console.error("Failed to find any products:", error);
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
        case SEARCH_PRODUCTS:
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
}

export default productsReducer;