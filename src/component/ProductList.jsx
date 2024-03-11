import React from 'react'

const ProductList = ({products}) => {
  return (
    <div className="product-list">
        {      
            products.map((product) => {
                return (
                    <div key={product.id} className='product'>
                        <h1>{product.name}</h1>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList