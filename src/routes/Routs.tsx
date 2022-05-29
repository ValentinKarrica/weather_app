import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "../screens/landingPage/LandingPage";
import LogIn from "../screens/login/LogIn";
import SignUp from "../screens/signUp/SignUp";

const Routs = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC URLS  */}
        <Route exact path="/" component={LandingPage}/>
    
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>

        {/* PRIVATE URLS  */}
      </Switch>
    </BrowserRouter>
  );
};
export default Routs;
