import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import SignInPage from "./components/Users/SignInPage";
import RegistrationPage from "./components/Users/RegistrationPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
  <Router>
        <div className="App">
            <div>
                <Header/>

                <Switch>
                    <Route path="/login" component={SignInPage}/>
                    <Route path="/registration" component={RegistrationPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </div>

            <Footer/>
        </div>
  </Router>
  );
}

export default App;
