import React from "react"
import {connect} from "react-redux";
import LoginLogoutBtn from "../top-bar/login-logout-btn"

export class TopBar extends React.Component {
    render() {
        return(
            <div className="row border-bottom">
                <div className="col-1">
                    QOTD
                </div>

                <div className="col-7">
                    Search
                    <input/>
                </div>

                {
                    this.props.loggedIn &&
                        <>
                            {console.log(this.props.profileData)}
                        </>
                }

                <div className="col-2">
                    <LoginLogoutBtn/>
                </div>

                <div className="col-2">
                    <button>
                        Sign Up
                    </button>
                </div>

            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData
})

export default connect(stpm)(TopBar)