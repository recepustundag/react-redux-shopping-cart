import React from "react";
import { connect } from "react-redux";

import { GET_TOTALS } from '../actions/types'
import Basket from "../components/Card";

const Card = ({ cart, dispatch}) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  return (
    <>
      {cart.length > 0 ? (
        <Basket cart={cart} />
      ) : (
        <div className="text-2xl text-gray-500 bg-white p-5 shadow text-center mb-6">
          No selected product
        </div>
      )}
    </>
  );
};

const mapStateToProps = (store) => {
  const { cart} = store.cartState;
  return { cart};
};


export default connect(mapStateToProps)(Card);
