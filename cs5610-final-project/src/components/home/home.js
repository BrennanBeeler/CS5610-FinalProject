import React from "react"
import {connect} from "react-redux";
import TopBar from "../top-bar/top-bar";
import "./home.css"

export class Home extends React.Component {
    render() {
        return(
            <div>
                <TopBar/>

                <h1 className="text-center">Quote of the Day</h1>

                <div className="text-center">
                    {/*TODO: need to populate this area*/}
                    “To be successful you have to be selfish, or else you never achieve.
                    And once you get to your highest level, then you have to be unselfish.
                    Stay reachable. Stay in touch. Don’t isolate.” – Michael Jordan
                </div>

                <br/>

                <div className="row">
                    <div className="card col">
                        <div className="card-body">
                            Category
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            Category
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            Category
                        </div>
                    </div>
                </div>

                <br/>

                <div className="text-center">
                    <h4> Creators to follow</h4>
                    <br/>

                    {/*TODO: populate these appropriately*/}
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <div className="wbdv-circle"/>
                        </div>
                        <div className="col-2">
                            <div className="wbdv-circle"/>
                        </div>
                        <div className="col-2">
                            <div className="wbdv-circle"/>
                        </div>
                        <div className="col-2">
                            <div className="wbdv-circle"/>
                        </div>
                        <div className="col-2">
                            <div className="wbdv-circle"/>
                        </div>
                        <div className="col-2">
                            <div className="wbdv-circle"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(stpm)(Home)