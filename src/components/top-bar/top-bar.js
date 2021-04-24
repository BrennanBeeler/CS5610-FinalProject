import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./top-bar.css";

const TopBar = ({ loggedIn, profileData }) => {
    return (
        <nav className="navbar wbdv-top-bar-spacing">
            <div className="col-2">
                <Link to="/home" className="wbdv-bold-text">
                    <h4>QOTD</h4>
                </Link>
            </div>

            <div className="col-lg-6 col-xl-8 col-2">
                <Link to={"/search"} className="wbdv-search-text">
                    <h4>Search<
                </Link>
            </div>

            <div className="col-auto">
                {loggedIn && (
                    <Link to="/profile" className="btn btn-info text-nowrap">
                        {profileData.username}
                    </Link>
                )}

                {!loggedIn && (
                    <>
                        <Link
                            to="/login"
                            className="btn mr-1 mb-1 btn-primary text-nowrap"
                        >
                            Log In
                        </Link>
                    </>
                )}
                {!loggedIn && (
                    <Link
                        to={"/register"}
                        className="btn ml-1 mb-1 btn-secondary text-nowrap"
                    >
                        Sign Up
                    </Link>
                )}
            </div>
        </nav>
    );
};

const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData,
});

export default connect(stpm)(TopBar);
