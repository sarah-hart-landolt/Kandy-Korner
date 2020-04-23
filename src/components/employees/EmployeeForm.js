import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const employeeName = useRef("")
    const employeeLocation = useRef()
    const employeePay = useRef(0)
    const manager = useRef("")
    const fullTime= useRef("")

    const constructNewEmployee = () => {
        const locationId = parseInt(employeeLocation.current.value)
        const employeeHourly= parseFloat(employeePay.current.value)
        const isManager = (manager.current.value === 0 ? false : true)
        const isFullTime = (fullTime.current.value === 0 ? false : true)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: employeeName.current.value,
                locationId: locationId,
                pay: employeeHourly,
                manager: isManager,
                fullTime: isFullTime
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={employeeName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeePay">Hourly Wage: </label>
                    <input
                        type="text"
                        id="employeePay"
                        ref={employeePay}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="$ Hourly Wage"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager Position? </label>
                    <select
                        defaultValue=""
                        name="manager"
                        ref={manager}
                        id="manager"
                        className="form-control"
                    >
                        <option value="0">Yes</option>
                        <option value="1">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Full Time/ Part Time </label>
                    <select
                        defaultValue=""
                        name="fullTime"
                        ref={fullTime}
                        id="fullTime"
                        className="form-control"
                    >
                        <option value="0">Full Time</option>
                        <option value="1">Part Time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={employeeLocation}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}