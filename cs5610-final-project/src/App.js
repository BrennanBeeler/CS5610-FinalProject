import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home";
import Profile from "./components/profile/profile";
import Search from "./components/search/search";
import Details from "./components/details/details";
import Login from "./components/login/login";


//TODO figure out if app is okay as class
function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path={["/", "/home"]} exact={true}>
                    <Home/>
                </Route>

                <Route path="/profile">
                    <Profile/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/search">
                    <Search/>
                </Route>

                <Route path="/details">
                    <Details/>
                </Route>

                {/*TODO determine if we want a privacy policy page*/}


            </div>
        </BrowserRouter>
    );
}

export default App;
