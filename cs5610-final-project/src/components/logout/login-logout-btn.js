import React from "react";
import {connect} from "react-redux";

const LoginLogoutBtn = ({loggedIn, logOut, logIn}) =>
        <div>
            {
                !loggedIn &&
                <button className="btn btn-primary" onClick={logIn}>
                    Log In
                </button>
            }

            {
                loggedIn &&
                <button className="btn btn-danger" onClick={logOut}>
                    Log Out
                </button>
            }
        </div>

const stpm = (state) => ({
    loggedIn: state.loggedIn
})

const dtpm = (dispatch) => ({
    logOut: () => {
        dispatch({type: "LOG_OUT"})
    },
    logIn: () => {
        dispatch({type: "LOG_IN"})
    }
})

export default connect(stpm, dtpm)(LoginLogoutBtn)
