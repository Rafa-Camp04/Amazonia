import csrfFetch from "./csrf";

// Action type
const SEARCH_PRODUCTS = 'product/searchProducts';
const CLEAR_SEARCH = 'product/clearSearch';

// Action creator
export const setSearchResults = (results) => ({
    type: SEARCH_PRODUCTS,
    payload: results
});

export const clearSearchResults = () =>  ({
    type: CLEAR_SEARCH
})


// Thunk action
export const searchProducts = (searchTerm) => async (dispatch) => {
    try {
        // Make an API call to search for products
        const response = await csrfFetch(`/api/search/products?q=${searchTerm}`);
        const data = await response.json();

        // Dispatch the action with the search results
        dispatch(clearSearchResults())
        dispatch(setSearchResults(data));
        return data;
    } catch (error) {
        console.error("Failed to find any products:", error);
        throw error;
    }
}

// Reducer
const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, ...action.payload };
        case CLEAR_SEARCH:
            return {};
        default:
            return state;
    }
}

export default searchReducer;