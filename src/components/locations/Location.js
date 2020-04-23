import React from "react"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <div className="location__handicap"> handicap access: {location.handicap ? "✅" : "🚫"}</div>
    </section>
)