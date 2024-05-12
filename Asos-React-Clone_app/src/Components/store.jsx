import { createStore } from 'redux'; // Import createStore from Redux

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer); // Create store using createStore

export default store;