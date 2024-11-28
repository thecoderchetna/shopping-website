import React, {useContext} from 'react'
//import css
import './ProductList.css'

import { ShopContext } from '../ShopContext/ShopContext'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  return (
    <div>
      <div className="Product_list">
        <h2>Our Elegant Collections</h2>
        <div className="product_grid">
          {products.map((product) => {
            //destructure products
            const {id,image,title,price} = product
            return (
              <div className="product_card" key={id}>
                <img src = {image} alt="" />
                <div className="product_info">
                  <h4>{title}</h4>
                  <p>$ {price}</p>
                </div>
                <button>Add to Cart</button>
              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList