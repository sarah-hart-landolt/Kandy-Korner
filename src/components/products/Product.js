import React, { useContext } from "react"
import { Button } from "reactstrap"
import { CustomerCandyContext } from "../orders/CustomerCandyProvider"
// import { CustomerContext } from "../customers/CustomerProvider"
// import { ProductContext } from "./ProductProvider"


export default ({ product, productType }) => {
    const { addCustomerCandy } = useContext(CustomerCandyContext)

    const createNewOrder = () => {
        const parsedProductId= parseInt(product.id)
        const customerId= parseInt(localStorage.getItem("kandy_customer"))

        const newProductObject = {
            productId: parsedProductId,
            customerId: customerId
        }
         addCustomerCandy(newProductObject)
        }

    return(
       
    <>
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">${product.price}</div>
        <div className="product__type">Candy Category: {productType.name}</div>
        <Button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        createNewOrder()
                    }
                }
                className="btn btn-primary">
                Add to Cart
            </Button>
    </section>
            </>
    )
    }