import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerCandyContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerCandyProvider = (props) => {
    const [ customerCandys, setCustomerCandys] = useState([])

    const getCustomerCandys = () => {
        return fetch("http://localhost:8090/customerCandy")
            .then(res => res.json())
            .then(setCustomerCandys)
    }

    const addCustomerCandy = customerCandy => {
        return fetch("http://localhost:8090/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandy)
        })
            .then(getCustomerCandys)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCustomerCandys()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [customerCandys])

    return (
        <CustomerCandyContext.Provider value={{
            customerCandys, addCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}