import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <Fragment>
            
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to="/dashboard">
                            <a href="!#" className="nav-link">Chef Dashboard</a>
                        </Link>
                    </li>
                </ul>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <button onClick={logout} className="btn btn-success my-2 my-sm-0" type="submit">Log Out</button> 
                                </li>

                            </ul>
                </div>
        </Fragment>

    );

    const guestLinks = (
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
    );

    return (
        <div>
            <div className="navbar  navbar-expand navbar-dark bg-primary">

                <Link to="/">
                    <h2 className="navbar-brand" href="!">SAVOURY</h2>
                </Link>

                { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
      
            </div>
        </div>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)

