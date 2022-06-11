import React from "react";
import Routs from "./routes/Routs";
import { useEffect } from "react";
import { RootState } from "./store/config/rootReducer";

import { setIsAuthenticated, setUserAuth } from "./store/auth/AuthSlice";
import { UserAuth } from "./model";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isAuthenticated, userAuth } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  //Keep user connected when page Reloaded!

  useEffect(() => {
    if (performance.navigation.type === 1) {
      if (localStorage.length !== 0) {
        const localSore: any = localStorage.getItem("userAuthJson");
        const localStorageUserAuth: UserAuth = JSON.parse(localSore);
        dispatch(setIsAuthenticated(true));
        dispatch(setUserAuth(localStorageUserAuth));
      }
    }
  }, [isAuthenticated]);

  return (
    <React.Fragment>
      <Routs />
    </React.Fragment>
  );
}
export default App;
