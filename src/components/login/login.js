import React, {useState} from "react";
import {connect} from "react-redux";
import logActions from "../../actions/log-actions";
import {Redirect} from "react-router";

const Login = (
    {
        logIn,
        loggedIn
    }) => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    async function validateCredentials () {
        //TODO: validate log in credentials against database

        if (await logIn(username, password) === false) {
            alert("Those are invalid credentials, please try again")
        }
    }

    return(
        <div className="container text-center">
            <div className="container">
                <br/>
                <h1>Welcome Back</h1>

                <div className="form-group row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                        UserName
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="usernameFld"
                               placeholder="Username"
                               value={username}
                               onChange={event => setUsername(event.target.value)}
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
                               type="password"
                               value={password}
                               onChange={event => setPassword(event.target.value)}/>
                    </div>
                </div>

                <div>
                    <button onClick={() => validateCredentials()} className="btn btn-primary btn-block">
                        Log In
                    </button>
                </div>

                {
                    loggedIn &&
                    <Redirect to={"/home"}/>
                }

                <div className="form-check">
                    <div className="float-left">
                        {/*TODO: determine how to do this*/}
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label " htmlFor="flexCheckDefault">
                            Remember me ?????????
                        </label>
                    </div>
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
    logIn: (username, password) => logActions.logIn(dispatch, username, password)(dispatch)
})

export default connect(stpm, dtpm)(Login)