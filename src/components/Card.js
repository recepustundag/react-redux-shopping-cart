import React from "react";
import {connect} from 'react-redux'

import { removeItem } from '../actions/CardActions'
import { INCREASE, DECREASE } from '../actions/types'
import { FaTrashAlt } from "react-icons/fa";
import CurrencyFormat from 'react-currency-format';

const Cards = ({ cart, total, removeToCart, increase, decrease }) => {
  return (
    <>
    <div className="border border-gray-200 bg-white rounded shadow p-5">
      <div className="font-semibold text-gray-800 text-center text-xl -mt-2 mb-4">
        Cart List
      </div>

      {cart.map((item) => (
        <div className="flex items-center justify-between w-full mb-6" key={item.id}>
          <div className="flex items-center">
            <div className="w-16 mr-4">
              <img
                className="rounded w-10 h-10"
                alt={item.name}
                src={item.image}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-500 text-sm font-semibold">
                <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <span onClick={() => decrease(item.id)} className="flex items-center justify-center bg-gray-300 text-gray-900 font-semibold w-8 h-6 rounded-l-sm hover:bg-gray-400 transition duration-150 ease-in-out cursor-pointer">
                -
              </span>
              <span className="px-2 text-gray-500 font-semibold bg-gray-200">
                {item.amount}
              </span>
              <span onClick={() => increase(item.id, item.amount)} className="flex items-center justify-center bg-gray-300 text-gray-900 font-semibold w-8 h-6 rounded-l-sm hover:bg-gray-400 transition duration-150 ease-in-out cursor-pointer">
                +
              </span>
            </div>
            <button onClick={() => removeToCart(item.id)} className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-2 rounded">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-8 text-xl">
        <span className="font-semibold mr-4">Total:</span>
        <span>
          <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </span>
      </div>
    </div>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    total: state.cartState.total,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (id) =>  dispatch(removeItem(id)),
    increase: (id) => dispatch({ type: INCREASE, payload: { id } }),
    decrease: (id, amount) => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cards);
