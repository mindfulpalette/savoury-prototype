import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect }  from 'react-router-dom';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';
import PropTypes from 'prop-types'

//Components



const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { first_name, last_name, email, password, password2 } = formData;

    //EVENT HANDLERS///////////////////////////////////////////////////////////////////
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({ first_name, last_name, email, password});
        }
    }

    if(isAuthenticated) {
        return <Redirect to="/dashboard"/>
    }

    //COMPONENT HTML///////////////////////////////////////////////
    return (
        <div>
            <div className="container m-2 p-2">
                <h1>
                    Create an Account
                </h1>
                <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            onChange={e => onChange(e)} 
                            name="email" 
                            value={ email }  
                            className="form-control" 
                            placeholder="Enter email">
                        </input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            onChange={e => onChange(e)} 
                            name="password" 
                            value={ password } 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter Password">
                        </input>
                        <small id="emailHelp" className="form-text text-muted">Please enter password again.</small>
                        <input 
                            onChange={e => onChange(e)} 
                            name="password2" 
                            value={ password2 } 
                            type="password" 
                            className="form-control" 
                            placeholder="Password Confirmation">
                        </input>
                    </div>

                    <div className="form-group">
                        <label>File input</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                        <small id="fileHelp" className="form-text text-muted">Please upload Servesafe and other relevant documents</small>
                    </div>

                    <fieldset>

                <div className="form-group">
                    <h4>Address</h4>

                    <div className="form-group">

                        <label>First Name</label>
                        <div className="controls">
                            <input 
                                onChange={e => onChange(e)} 
                                className="form-control" 
                                id="first-name" 
                                value={ first_name } 
                                name="first_name" 
                                type="text" 
                                placeholder="First name">
                            </input>
                            <p className="help-block"></p>
                        </div>

                        <label>Last Name</label>
                        <div className="controls">
                            <input 
                                onChange={e => onChange(e)} 
                                className="form-control" 
                                id="last-name" 
                                value={ last_name } 
                                name="last_name" 
                                type="text" 
                                placeholder="Last name">
                            </input>
                            <p className="help-block"></p>
                        </div>

                    </div>
                    
                    <div className="form-group">

                        <label>Address Line 1</label>
                        <div className="controls">
                            <input 
                                onChange={e => onChange(e)} 
                                id="address-line1"
                                name="address-line1" 
                                type="text" 
                                placeholder="address line 1"
                                className="form-control">
                        </input>  
                        </div>

                    </div>
                    
                    <div className="form-group">

                        <label>Address Line 2</label>
                        <div className="controls">
                            <input 
                                onChange={e => onChange(e)} 
                                id="address-line2" 
                                name="address-line2" type="text" 
                                placeholder="address line 2"
                                className="form-control">
                            </input>
                            
                        </div>
                    </div>
                    
                    <div className="form-group">

                        <label>City / Town</label>
                        <div className="controls">
                            <input 
                                onChange={e => onChange(e)} 
                                id="city" 
                                name="city" type="text" 
                                placeholder="city" 
                                className="form-control">
                            </input>

                            <p className="help-block"></p>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>State / Province / Region</label>
                        <div className="controls">
                            <input onChange={e => onChange(e)} id="region" name="region" type="text" placeholder="state / province / region"
                            className="form-control"></input>
                            <p className="help-block"></p>
                        </div>
                    </div>
                
                    <div className="form-group">
                        <label>Zip / Postal Code</label>
                        <div className="controls">
                            <input 
                                onChange={e => onChange(e)} 
                                id="postal-code" name="postal-code" 
                                type="text" 
                                placeholder="zip or postal code"
                                className="form-control">
                            </input>
                            <p className="help-block"></p>
                        </div>
                    </div>

                </div>
              
                <div className="form-check">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" ></input>
                    Have you read terms and conditions?
                    </label>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary m-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
