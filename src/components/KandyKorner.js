import React from "react"
import "./locations/Location.css"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"

export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Welcome Sweet Tooths!</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <article>
        
            <LocationProvider>
                <ProductProvider>
                    <ProductTypeProvider>
                        <LocationList />
                        <ProductList />
                    </ProductTypeProvider>
                </ProductProvider>
            </LocationProvider>
        
        </article>
    </>
)