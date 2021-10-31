import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import SignInPage from "./components/Users/SignInPage";
import RegistrationPage from "./components/Users/RegistrationPage";
import ItemListPage from "./components/Pages/ItemListPage";
import ItemDetailsPage from "./components/Pages/ItemDetailsPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PasswordResetPage from "./components/Users/PasswordResetPage";
import {ItemListProvider} from "./components/Contexts/ItemListContext";
import {ShoppingCartProvider} from "./components/Contexts/ShoppingCartContext";
import ShoppingCartPopup from "./components/ShoppingCart/ShoppingCartPopup";

function App() {
  return (
  <Router>
      <ItemListProvider>
            <ShoppingCartProvider>

                <div className="App">
                    <ShoppingCartPopup/>

                    <div>
                        <Header/>

                        <Switch>
                            <Route path="/categories/:category/:subcategory?" component={ItemListPage}/>
                            <Route path="/details/:slug" component={ItemDetailsPage}/>

                            <Route path="/users/login" component={SignInPage}/>
                            <Route path="/users/registration" component={RegistrationPage}/>
                            <Route path="/users/password-reset" component={PasswordResetPage}/>
                            <Route path="/" component={HomePage}/>
                        </Switch>
                    </div>

                    <Footer/>
                </div>

            </ShoppingCartProvider>
      </ItemListProvider>
  </Router>
  );
}

export default App;
