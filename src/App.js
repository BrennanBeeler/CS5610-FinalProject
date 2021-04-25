import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Profile from "./components/profile/profile";
import Search from "./components/search/search";
import Details from "./components/details/details";
import Login from "./components/login/login";
import { Provider } from "react-redux";
import store from "./store/store.js";
import TopBar from "./components/top-bar/top-bar";
import Register from "./components/register/register";
import SearchResults from "./components/search-results/search-results";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container-fullwidth wbdv-full-height wbdv-background-color">
                    <div className="wbdv-btm-border"/>
                    <div className="wbdv-left-border"/>
                    <div className="wbdv-right-border"/>

                    <TopBar/>

                    <Route path={["/", "/home"]} exact={true}>
                        <Home/>
                    </Route>

                    <Route path={["/profile", "/profile/:profileId"]} exact={true}>
                        <Profile/>
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/search" exact={true}>
                        <Search/>
                    </Route>

                    <Route path={["/details", "/details/quote/:quoteId", "/details/collection/:collectionId"]} exact={true}>
                        <Details/>
                    </Route>

                    <Route path="/register">
                        <Register/>
                    </Route>

                    <Route path="/search/:searchTerm">
                        <SearchResults/>
                    </Route>

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
