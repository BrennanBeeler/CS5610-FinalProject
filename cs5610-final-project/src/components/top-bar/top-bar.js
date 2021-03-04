import React from "react"
import {connect} from "react-redux";
import {Link} from "react-router-dom";

export class TopBar extends React.Component {
    render() {
        return(
            <div className="row border-bottom">
                <div className="col-2">
                    <Link to="/home">
                        <h4>
                            QOTD
                        </h4>
                    </Link>
                </div>

                <div className="col-6">
                    Search
                    <input className="form-group"/>
                </div>

                <div className="col-2s">
                    {
                        this.props.loggedIn &&
                        <>
                            {this.props.profileData.userName}
                        </>
                    }

                    {
                        // TODO: decide if its okay to have log in button show on log in page- simple solution is put top bar on each page
                        !this.props.loggedIn &&
                        <>
                            <Link to="/login" className="btn btn-primary">
                                Log In
                            </Link>
                        </>
                    }
                </div>

                {
                    !this.props.loggedIn &&
                    <div className="col-2">
                        <Link to={"/register"} className="btn btn-secondary float-right">
                            Sign Up
                        </Link>
                    </div>
                }



            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData
})

export default connect(stpm)(TopBar)