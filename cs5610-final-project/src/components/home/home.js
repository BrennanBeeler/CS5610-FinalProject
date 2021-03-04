import React from "react"
import {connect} from "react-redux";
import "./home.css"
import CategoryCard from "../../card/category-card";

export class Home extends React.Component {
    render() {
        return(
            <div>
                <h1 className="text-center">Quote of the Day</h1>

                <blockquote className="text-center blockquote">
                    {/*TODO: need to populate this area*/}
                    “To be successful you have to be selfish, or else you never achieve.
                    And once you get to your highest level, then you have to be unselfish.
                    Stay reachable. Stay in touch. Don’t isolate.” – Michael Jordan
                </blockquote>

                <br/>

                <div className="row">
                    {/*TODO: populate with categories*/}
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
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