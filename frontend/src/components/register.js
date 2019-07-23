import React from 'react'

const register = () => {
    return (
        <div>
            
            <div className="container">
                <h1>
                    Create an Account
                </h1>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password"></input>
                        <small id="emailHelp" className="form-text text-muted">Please enter password again.</small>
                        <input type="password" className="form-control" placeholder="Password Confirmation"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default register
