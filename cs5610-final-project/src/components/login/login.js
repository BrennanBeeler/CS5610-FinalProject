import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Home} from "../home/home";

class Login extends React.Component {
    render() {
        return(
            <div className="container text-center">


                <div className="container">
                    <h1>Welcome Back</h1>

                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            UserName </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="usernameFld"
                                   placeholder="Username"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            UserName
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="passwordFld"
                                   placeholder="Password"/>
                        </div>
                    </div>


                    <div>
                        <Link to="/home" className="btn btn-primary btn-block">
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
                        <Link className="float-right">
                            Forgot Password?
                        </Link>


                    </div>
                </div>
            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(stpm)(Login)