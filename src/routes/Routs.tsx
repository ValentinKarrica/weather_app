import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../screens/landingPage/LandingPage";
import LogIn from "../screens/login/LogIn";
import SignUp from "../screens/signUp/SignUp";
import Dashboard from "../screens/dashboard/Dashboard";
import Settings from "../screens/settings/Settings";

const Routs = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC URLS  */}

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />

        {/* PRIVATE URLS  */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routs;
