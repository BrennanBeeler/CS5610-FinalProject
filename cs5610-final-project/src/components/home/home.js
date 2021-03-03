import React from "react"
import {connect} from "react-redux";
import TopBar from "../top-bar/top-bar";

export class Home extends React.Component {
    render() {
        return(
            <div>
                <TopBar/>

                {/*{console.log(this.props.profileData)}*/}

                <h1>Quote of the Day</h1>
            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(stpm)(Home)