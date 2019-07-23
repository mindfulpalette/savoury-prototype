import React from 'react';
import { Link } from 'react-router-dom';


const navbar = () => {
    return (
        <div>
            <div className="navbar  navbar-expand navbar-dark bg-primary">

                <Link to="/">
                    <h2 className="navbar-brand" href="!">SAVOURY</h2>
                </Link>

                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to="/login">
                                <button className="btn btn-success my-2 my-sm-0" type="submit">Chef Login</button>
                            </Link>
                        </li>

                        <li>
                            <Link to="/register">
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Chef Register</button>
                            </Link>
                        </li>

                    </ul>
                </div>


                

            </div>
        </div>
    )
}

export default navbar

