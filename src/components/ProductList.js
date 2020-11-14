import React from 'react'
import { connect } from "react-redux";
import Product from './Product'

import Data from '../data'

const ProductList = ({dispatch}) => {
  
  return (
    <div className="grid grid-cols-3 gap-6 px-4">
      {
        Data.map(item => {
          return <Product {...item} key={item.id}/>
        })
      }
    </div>
  )
}

export default connect()(ProductList)