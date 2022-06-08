import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../screens/landingPage/LandingPage";
import LogIn from "../screens/login/LogIn";
import SignUp from "../screens/signUp/SignUp";
import Dashboard from "../screens/dashboard/Dashboard";
import { RootState } from "../store/config/rootReducer";
import { useSelector } from "react-redux";
import Settings from "../screens/settings/Settings";
const Routs = () => {
  const userAuth = useSelector((state: RootState) => state.auth.userAuth);

  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC URLS  */}
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/login" component={LogIn} />

        <Route exact path="/signup" component={SignUp} />

        {/* PRIVATE URLS  */}

       { userAuth.registered&&<Route exact path="/dashboard" component={Dashboard} />}
       { userAuth.registered&&<Route exact path='/settings' component={Settings} />}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routs;
