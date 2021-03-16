import React from "react";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";

const Login = (
    {
        logIn
    }) => {

    const history = useHistory();

    const validateCredentials = () => {
        if (document.getElementById("usernameFld").value === "test" &&
            document.getElementById("passwordFld").value === "password") {
            logIn()
            history.push("/home")
        }
        else if(document.getElementById("usernameFld").value === "" &&
            document.getElementById("passwordFld").value === "") {
            alert("Enter valid username and password")
        }
        else {
            alert("Incorrect login credentials")
        }
    }

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
                               placeholder="Password"/>
                    </div>
                </div>

                <div>
                    <button onClick={() => validateCredentials()} className="btn btn-primary btn-block">
                        Log In
                    </button>
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

const dtpm = (dispatch) => ({
//    TODO: need to turn into actual login procedure
    logIn: () => dispatch({
                 type : "LOG_IN"
             })
})

export default connect(null, dtpm)(Login)