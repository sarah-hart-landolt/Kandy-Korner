import React from "react"

export default ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">${product.price}</div>
        <div className="product__type">Candy Category: {productType.name}</div>
    </section>
)