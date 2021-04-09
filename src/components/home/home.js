import React from "react"
import {connect} from "react-redux";
import CategoryCard from "../card/category-card";
import CreatorIcon from "../creator-icon/creator-icon-";
import quotesService from "../../services/quotes-service"
import "./home.css";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteOfTheDay : {}
        }
    }

    componentDidMount() {
        // TODO: Can move this into a reducer, but doesn't seem important since it isn't being passed at all
        quotesService.getQuoteOfDay().then(response =>
            this.setState((prevState) =>
                ({...prevState,
                    quoteOfTheDay : response.contents.quotes[0]
                })
            )
        )
    }

    render() {
        return(
            <div className="wbdv-padding-sides">
                <h1 className="text-center">Quote of the Day</h1>

                <div style={{left: "12.5%", width: "75%", position: "relative"}}>
                    {/*TODO: ask prof how to get into css file*/}
                    <blockquote className="text-center blockquote" style={{
                        backgroundImage: `url(${this.state.quoteOfTheDay.background})`,
                        height: "517px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition : "center",
                        backgroundSize : "cover",
                        border : "10px solid #99b9bf"
                    }} >
                        <p className="wbdv-home-quote">
                            <br/>
                            {this.state.quoteOfTheDay.quote}
                        </p>
                        <footer>-{this.state.quoteOfTheDay.author}</footer>
                    </blockquote>
                </div>


                <br/>

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