import React, { useState } from 'react';
import { Redirect }  from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
       console.log('success')
       login(email, password)
    }

    // Redirect for Login

    if(isAuthenticated) {
        return <Redirect to="/dashbord"/>
    }

    return (
        <div className="container-fluid">
            <h2>Please Sign In</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        name="email"
                        value={ email }
                        onChange={e => onChange(e)} 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="example@email.com">
                    </input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        value={ password }
                        onChange={e => onChange(e)}  
                        type="password" 
                        className="form-control"  
                        aria-describedby="passwordHelp" 
                        placeholder="Enter Password">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <small className="form-text text-muted">Forgot Password?</small>
            </form>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
