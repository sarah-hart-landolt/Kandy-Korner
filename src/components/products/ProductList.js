import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const {productTypes} = useContext(ProductTypeContext)

    return (
     <>
        <h2>Products</h2>
        
        <div className="products">
        {
            products.map(prod => {
                const ProductType = productTypes.find(pt => pt.id === prod.productTypeId)
            return <Product key={prod.id} product={prod} productType = {ProductType}/> })
        }
        </div>
     </>
    )
}
