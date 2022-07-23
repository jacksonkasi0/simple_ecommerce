const initialState = {
  products: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      

      return {
        products:[...state.products, ...action.payload]
      }
      
    default:
      return state;
  }
};

export default userReducer;
