import React from 'react'

export default function navbar() {
    return (
        <div>
            <nav className="navbar justify-content-end navbar-expand-lg navbar-dark bg-primary">
                <button className="btn btn-success my-2 my-sm-0" type="submit">Chef Login</button>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Chef Register</button>
            </nav>
        </div>
    )
}
