import React from "react"
import {connect} from "react-redux";
import LoginLogoutBtn from "../top-bar/login-logout-btn"

export class TopBar extends React.Component {
    render() {
        return(
            <div className="row border-bottom">
                <div className="col-2">
                    <h4>
                        QOTD
                    </h4>
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
                        !this.props.loggedIn &&
                        <>
                            <LoginLogoutBtn/>
                        </>
                    }
                </div>

                <div className="col-2">
                    <button className="btn btn-secondary float-right">
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