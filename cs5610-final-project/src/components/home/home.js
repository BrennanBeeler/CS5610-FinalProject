import React from "react"
import {connect} from "react-redux";
import LoginLogoutBtn from "../logout/login-logout-btn"

export class Home extends React.Component {

    render() {
        return(
            <div>
                <h1>Home</h1>

                <h1>
                    Value: {this.props.loggedIn.toString()}
                </h1>

                {
                    console.log(this.props.loggedIn)
                }


                <LoginLogoutBtn/>
            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(stpm)(Home)