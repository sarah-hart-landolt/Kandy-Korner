import React, { useContext, useState } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import EmployeeForm from "../employees/EmployeeForm"

export default () => {
    const { products } = useContext(ProductContext)
    const {productTypes} = useContext(ProductTypeContext)

    // const [modal, setModal] = useState(false)
    // const toggle = () => setModal(!modal)

    return (
     <>
        <h2>Products</h2>
        <div className="products">
        {
            products.map(prod => {
                const ProductType = productTypes.find(pt => pt.id === prod.productTypeId)
            return <Product key={prod.id} product={prod} productType = {ProductType}/> }
            )
        }
        </div>
        {/* <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal> */}
     </>
    )
}
