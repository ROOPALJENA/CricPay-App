import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <div id="notFound">
                <div className="notFound">
                    <div className="notFound-404">
                        <h1>404</h1>
                    </div>
                    <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>

                    <p>
                        THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR HAD IT'S NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
                    </p>

                    <NavLink to="/">Back to Home Page</NavLink>
                </div>
            </div>
        </>
    )
}

export default Error404
