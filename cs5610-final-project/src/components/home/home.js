import React from "react"
import {Provider} from "react-redux";
import applicationReducer from "../../reducers/application-reducer";
import {createStore} from "redux";
import LoginLogoutBtn from "../logout/login-logout-btn"
import Test from "../test"

const store = createStore(applicationReducer)

export default class Home extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <h1>Home</h1>

                    <h1>
                        {store.getState().loggedIn.toString()}
                    </h1>

                    <Test/>

                    {
                        console.log(store.getState())
                    }


                    <LoginLogoutBtn/>
                </div>
            </Provider>
        )
    }
}
