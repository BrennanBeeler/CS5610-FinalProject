import React from "react"
import {connect} from "react-redux";
import CategoryCard from "../card/category-card";
import CreatorIcon from "../creator-icon/creator-icon-";

export class Home extends React.Component {
    render() {
        return(
            <div>
                <h1 className="text-center">Quote of the Day</h1>

                <blockquote className="text-center blockquote">
                    {/*TODO: need to populate this area with quote from api*/}
                    “To be successful you have to be selfish, or else you never achieve.
                    And once you get to your highest level, then you have to be unselfish.
                    Stay reachable. Stay in touch. Don’t isolate.” – Michael Jordan
                </blockquote>

                <br/>

                <div className="row">
                    {/*TODO: populate with categories, popular for anonymous, liked/followed for logged in*/}
                    {/*TODO: fix issue on very small screen where one category gets huge*/}
                    <div className="col col-sm-6 col-md-3">
                        <CategoryCard/>
                    </div>
                    <div className="col col-sm-6 col-md-3">
                        <CategoryCard/>
                    </div>
                    <div className="col col-sm-6 col-md-3">
                        <CategoryCard/>
                    </div>
                    <div className="col col-sm-6 col-md-3">
                        <CategoryCard/>
                    </div>


                </div>

                <br/>

                <div className="text-center">
                    <h4> Creators to follow</h4>
                    <br/>

                    {/*TODO: populate these appropriately and make them dynamically spaced- always 6*/}
                    <div className="row">
                        <div className="col col-sm-2 col-xs-4">
                            <CreatorIcon/>
                        </div>
                        <div className="col col-sm-2 col-xs-4">
                            <CreatorIcon/>
                        </div>
                        <div className="col col-sm-2 col-xs-4">
                            <CreatorIcon/>
                        </div>
                        <div className="col col-sm-2 col-xs-4">
                            <CreatorIcon/>
                        </div>
                        <div className="col col-sm-2 col-xs-4">
                            <CreatorIcon/>
                        </div>
                        <div className="col col-sm-2 col-xs-4">
                            <CreatorIcon/>
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