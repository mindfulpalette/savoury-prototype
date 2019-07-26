import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Link }  from 'react-router-dom';
import PropTypes from 'prop-types';

const  Landing = ({ isAuthenticated }) => {

    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="container p-5">
            <div className="d-flex justify-content-center h-100">
                <div className="jumbotron">
                    <h1 className="display-3">Hello! Welcome to Savoury</h1>
                    <p className="lead"> Chef created meals prepared in your home kitchen.</p>
                    <hr className="my-4"></hr>
                    <p>Book an in home chef reservation for any occassion and eat together with friends and family.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="!" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
    )
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
