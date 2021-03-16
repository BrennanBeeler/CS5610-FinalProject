import React from "react"
import {Link} from "react-router-dom";

export default class Register extends React.Component {
    render() {
        return(
            //TODO: all values need to be validated
            <div className="container">
                <h1>Sign Up</h1>
                <div className="form-group row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                        UserName
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="usernameFld"
                               placeholder="Username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="passwordFld"
                               placeholder="Password"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="verifyPasswordFld"
                               placeholder="Password"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <Link to="/profile" className="btn btn-success btn-block">
                            Sign Up
                        </Link>

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
}