import React from "react"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./top-bar.css"

export class TopBar extends React.Component {
    render() {
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
                        // TODO: make this button link to profile
                        this.props.loggedIn &&
                        <Link to="/profile" className="btn btn-info">
                            {this.props.profileData.userName}
                        </Link>
                    }

                    {
                        !this.props.loggedIn &&
                        <>
                            <Link to="/login" className="btn btn-primary">
                                Log In
                            </Link>
                        </>
                    }

                    {
                        !this.props.loggedIn &&
                        <Link to={"/register"} className="btn btn-secondary">
                            Sign Up
                        </Link>
                    }
                </div>
            </nav>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData
})

export default connect(stpm)(TopBar)