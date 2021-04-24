import React from "react"
import {connect} from "react-redux";
import ExternalQuoteService from "../../services/external-quotes-service"
import "./home.css";
import {Card} from "react-bootstrap";
import CollectionService from "../../services/collection-service";
import {Link} from "react-router-dom";
import HomeFollowedCollection from "./home-followed-collection";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteOfTheDay : {},
            randomCollections : []
        }
    }

    componentDidMount() {
        ExternalQuoteService.getQuoteOfDay().then(response =>
            this.setState((prevState) =>
                ({...prevState,
                    quoteOfTheDay : response.contents.quotes[0]
                })
            )
        )

        CollectionService.GetAllCollections().then(response => {
            this.setState(prevState =>
                ({
                    ...prevState,
                    randomCollections: response
                })
            )
        })
    }

    getRandomCollections = (array) => {
        if (array === null) {
            return []
        }

        const length = array.length

        if (length <= 3) {
            return array
        }
        else {
            let numArray = []
            while (numArray.length < 3) {
                let tempVal = Math.floor(Math.random() * length)
                if (numArray.indexOf(tempVal) === -1) {
                    numArray.push(tempVal)
                }
            }

            let tempArray = []

            numArray.forEach(each => {
                tempArray.push(array[each])
            })

            return tempArray
        }
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


                {
                    this.props.loggedIn &&
                    //IF LOGGED IN
                    <div>
                        <div className="text-center">
                            <h4>Some Collections You Follow</h4>

                            <div className="row ml-5 mr-5">
                                {
                                    this.getRandomCollections(this.props.profileData.followedCollections).map(collection =>
                                        <HomeFollowedCollection collectionId={collection}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                }
                <br/>
                <div>
                    <div className="text-center">
                        <h4>Collection Showcase</h4>

                        <div className="row ml-5 mr-5 justify-content-center">
                            {
                                this.getRandomCollections(this.state.randomCollections).map(collection =>
                                    <Card className="col-4">
                                        <Card.Body>
                                            <Link to={`/details/collection/${collection.id}`}>
                                                {collection.collectionName}
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData
})

export default connect(stpm)(Home);