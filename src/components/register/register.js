import React, {useState} from "react"
import {Link} from "react-router-dom";
import logActions from "../../actions/log-actions";
import {connect} from "react-redux";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        if (username === "") {
            alert("Please enter a username")
        }
        else if (password === "") {
            alert("Please enter a password")
        }
        else if (confirmPassword === "") {
            alert("Please confirm your password")
        }
        else if (password !== confirmPassword) {
            alert("Your passwords don't match. Please confirm them both")
        }
        //TODO: further validation of all password/username
        else {
        //    TODO: try to create user on database
        }
    }

    return(
        <div className="container">
            <br/>

            <h1>Sign Up</h1>
            <br/>

            <div className="form-group row">
                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                    UserName
                </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           id="usernameFld"
                           placeholder="Username" value={username}
                           onChange={event => setUsername(event.target.value)}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           id="passwordFld"
                           type="password"
                           placeholder="Password" value={password}
                           onChange={event => setPassword(event.target.value)}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="confirmPasswordFld" className="col-sm-2 col-form-label">
                    Confirm Password </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           type="password"
                           id="confirmPasswordFld"
                           placeholder="Confirm password" value={confirmPassword}
                           onChange={event => setConfirmPassword(event.target.value)}/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    <button className="btn btn-success btn-block" onClick={handleSignUp}>
                        Sign Up
                    </button>

                    <div>
                        <Link to="/home">
                            Cancel
                        </Link>
                        <Link to="/login" className="float-right">
                            Already have an account?
                        </Link>
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

export default connect(stpm, dtpm)(Register)