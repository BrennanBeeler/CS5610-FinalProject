import React, {useState} from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Login = (
    {
        logIn,
        loggedIn
    }) => {

    return(
            <div className="container text-center">
                <div className="container">
                    <h1>Welcome Back</h1>

                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            UserName
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="usernameFld"
                                   placeholder="Username"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="passwordFld"
                                   placeholder="Password"
                            />
                        </div>
                    </div>


                    <div>
                        {/*TODO: find way to do this- operates in wrong order*/}
                        <Link to={loggedIn ? "/home" : "#"} onClick={() =>
                            // TODO: figure out way to do this- tried hooks and wasn't working
                            logIn(document.getElementById("usernameFld").value,
                                document.getElementById("passwordFld").value)}
                              className="btn btn-primary btn-block">
                            Log In
                        </Link>
                    </div>

                    <div className="form-check">
                        <div className="float-left">
                            {/*TODO: determine how to do this*/}
                            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label " htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>

                        {/*TODO: figure out forgot password*/}
                        <Link className="float-right" to="login">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        )
}

const stpm = (state) => ({
    loggedIn: state.loggedIn
})

const dtpm = (dispatch) => ({
//    TODO: need to turn into actual login procedure
    logIn : (userName, password) => {
        if (userName === "test" && password === "password") {
            dispatch({
                type : "LOG_IN"
            })
        }
        else {
            alert("Incorrect login credentials")
        }
    }
})

export default connect(stpm, dtpm)(Login)