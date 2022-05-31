import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSagas from "./rootSagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
    }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSagas)
export default store;