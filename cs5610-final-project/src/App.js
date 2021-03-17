import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import ProfileEditor from "./components/profile/profile";
import Search from "./components/search/search";
import Details from "./components/details/details";
import Login from "./components/login/login";
import { Provider } from "react-redux";
import store from "./store/store.js";
import TopBar from "./components/top-bar/top-bar";
import Register from "./components/register/register";
import SearchResults from "./components/search-results/search-results";

//TODO figure out if app is okay as class
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container-fluid">
                    <TopBar/>

                    <Route path={["/", "/home"]} exact={true}>
                        <Home/>
                    </Route>

                    <Route path={["/profile", "/profile/:id"]} exact={true}>
                        <ProfileEditor/>
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/search">
                        <Search/>
                    </Route>

                    <Route path="/details">
                        <Details/>
                    </Route>

                    <Route path="/register">
                        <Register/>
                    </Route>

                    <Route path="/search/:searchTerm">
                        <SearchResults/>
                    </Route>

                    {/*TODO determine if we want a privacy policy page*/}
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
