const initialState = {
  products: [],
  counter: 1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const founded = state.products.find((elem) => elem.id === action.playload.id)
      if (founded) {
        return state
      } else {
        return {
          ...state, products: [...state.products, action.playload]
        };
      }

    case "EDIT":
      const cartItem = state.products.find((elem) => elem.id === action.playload.id)
      if (cartItem) {
        cartItem.product.quantity += 1;
        cartItem.product.totalPrice = cartItem.product.price * cartItem.product.quantity;
        return {
          ...state,
          products : state.products.map((elem) => elem.id === action.playload.id ? cartItem : elem)
        };
      }
      
      return state;

    case "DECRIMENT":
      const cartItem1 = state.products.find((elem) => elem.id === action.playload.id)
      if (cartItem1) {
        if(cartItem1.product.quantity > 1 ){
          cartItem1.product.quantity -= 1;
        }
        
        cartItem1.product.totalPrice = cartItem1.product.price * cartItem1.product.quantity;
        return {
          ...state,
          products : state.products.map((elem) => elem.id === action.playload.id ? cartItem1 : elem)
        };
      }
      
      return state;

    case 'REMOVE':
      return {
        ...state, products: state.products.filter((item) => item.id !== action.playload)
      };
    default:
      return state;
  }
};

export default rootReducer;