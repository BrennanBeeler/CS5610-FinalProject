import React from "react"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./top-bar.css"

const TopBar = ({loggedIn, profileData}) => {
    return(
        <nav className="navbar wbdv-top-bar-spacing">
            <div className="col-2">
                <Link to="/home" className="wbdv-bold-text">
                    <h4>
                        QOTD
                    </h4>
                </Link>
            </div>

            <div className="col-8">
                <Link to={"/search"} className="wbdv-search-text">
                    Search
                </Link>
            </div>

            <div className="col-2s">
                {
                    loggedIn &&
                    <Link to="/profile" className="btn btn-info">
                        {profileData.username}
                    </Link>
                }

                {
                    !loggedIn &&
                    <>
                        <Link to="/login" className="btn btn-primary">
                            Log In
                        </Link>
                    </>
                }

                {
                    !loggedIn &&
                    <Link to={"/register"} className="btn btn-secondary">
                        Sign Up
                    </Link>
                }
            </div>
        </nav>
    )
}

const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData
})

export default connect(stpm)(TopBar)