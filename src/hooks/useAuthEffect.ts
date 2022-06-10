import { DependencyList, EffectCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/config/rootReducer";

/**
 * Hook will run callback ONLY when user is Authenticated and
 * when the dependencies change
 */
const useAuthEffect = (
  callback: EffectCallback,
  dependencies: DependencyList
) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dependenciesToString = JSON.stringify(dependencies);

  useEffect(() => {
    if (isAuthenticated) {
      callback();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, dependenciesToString]);
};

export default useAuthEffect;
