import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { HiShoppingCart } from "react-icons/hi";

const Navbar = ({ amount, cart}) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            Shopping Cart
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <Link to="/">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        <div>
          <Link to="/card">
            <button
              type="button"
              className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:border-transparent mt-4 lg:mt-0 relative"
            >
              {amount != null && amount > 0 && (
                <span className="flex items-center justify-center absolute inset-0 bg-red-600 text-white text-xs font-semibold w-5 h-5 ml-2 rounded-full">
                  {amount}
                </span>
              )}
              <HiShoppingCart className="w-9 h-9" size="1.6em" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { amount: state.cartState.amount, cart: state.cartState.cart };
};

export default connect(mapStateToProps)(Navbar);
