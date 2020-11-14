import React from "react";
import { connect } from "react-redux";

import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/types";
import CurrencyFormat from "react-currency-format";

const Product = ({ name, price, image, addToCart }) => {
  return (
    <div className="border border-gray-200 rounded shadow p-4 bg-white">
      <div className="flex items-center justify-center">
        <img src={image} alt={name} className="w-1/2" />
      </div>
      <div className="mt-4 text-center text-gray-600 text-sm flex items-center h-24 pb-2">
        {name}
      </div>
      <div className="text-green-500 text-center font-semibold">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <div className="py-2 mt-6 flex items-center justify-center">
        <button
          type="button"
          onClick={() => addToCart()}
          className="bg-gradient-to-b from-gray-200 to-gray-400 text-gray-700 hover:from-green-200 hover:to-green-600 hover:text-white focus:outline-none font-bold text-xs py-2 px-8 rounded"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => dispatch({ type: ADD_TO_CART, ownProps }),
    removeToCart: () => dispatch({ type: REMOVE_TO_CART, ownProps }),
  };
};

const mapStateToProps = (state) => {
  return { cart: state.cartState.cart };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
