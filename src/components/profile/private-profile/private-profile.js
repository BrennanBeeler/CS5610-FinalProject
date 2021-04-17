import React, {useState} from "react";
import MyInfo from "./my-info";
import FollowedCreators from "./followed-creators";
import MyCollections from "./my-collections/my-collections";
import MyBio from "./my-bio";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import logActions from "../../../actions/log-actions";

const PrivateProfile = ({profileData, loggedIn, logOut}) => {
    const [active, setActive] = useState("MyInfo");

    const history = useHistory();

    if (!loggedIn) {
        history.push("/login")
    }

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${active === "MyInfo" ? "active" : ""}`}
                       onClick={() => setActive("MyInfo")}>
                        My Details
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${active === "MyCreators" ? "active" : ""}`}
                       onClick={() => setActive("MyCreators")}>
                        Creators/Collections? You Follow
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${active === "MyBio" ? "active" : ""}`}
                       onClick={() => setActive("MyBio")}>
                        My Bio
                    </a>
                </li>
                {
                    profileData.premium &&
                    <li className="nav-item">
                        <a className={`nav-link ${active === "MyCollections" ? "active" : ""}`}
                           onClick={() => setActive("MyCollections")}>
                            My Collections
                        </a>
                    </li>
                }
            </ul>

            <br/>
            <div>

                {active === "MyInfo" && <MyInfo profileData={profileData}/>}
                {active === "MyCreators" && <FollowedCreators/>}
                {active === "MyCollections" && <MyCollections/>}
                {active === "MyBio" && <MyBio profileData={profileData}/>}
            </div>



            <div style={{marginTop: "100px"}}>
                <button className="btn btn-danger btn-block" onClick={logOut}>
                    Log Out
                </button>
            </div>


        </div>
    )
}

const stpm = (state) => ({
    profileData : state.profileData,
    loggedIn: state.loggedIn
})

const dtpm = (dispatch) => ({
    logOut : () => logActions.logOut(dispatch)
})

export default connect(stpm, dtpm)(PrivateProfile);
