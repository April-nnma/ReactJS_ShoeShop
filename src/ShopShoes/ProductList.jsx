import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({shoesList}) => {
  return (
    <div className='row'>
      {shoesList.map((shoes)=>(
        <ProductItem shoes={shoes} key={shoes.id}/>
      ))}    
    </div>
  )
}

export default ProductList