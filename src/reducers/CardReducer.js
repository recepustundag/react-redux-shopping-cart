import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  GET_TOTALS,
  INCREASE,
  DECREASE,
} from "../actions/types";

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

function cartReducer(state = initialState, action) {
  if (action.type === ADD_TO_CART) {
    let index = state.cart.findIndex((item) => item.id === action.ownProps.id),
      amount = state.amount,
      total = 0;
    if (index === -1) {
      state.cart.push(action.ownProps);
    }
    amount = state.cart.length;
    let cart = state.cart;

    state.cart.map((item) => {
      total += item.price;
    });
    state.total = total.toFixed(2);
    return { ...state, amount, cart, total };
  }

  if (action.type === REMOVE_TO_CART) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    const totalAmout = state.cart.length;
    return { ...state, total, totalAmout };
  }

  if (action.type === INCREASE) {
    let cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart };
  }

  if (action.type === DECREASE) {
    let cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if( item.amount > 1 ){
            item = { ...item, amount: item.amount - 1 };
          }
        }
        return item;
    });

    return { ...state, cart };
  }

  return state;
}

export default cartReducer;
