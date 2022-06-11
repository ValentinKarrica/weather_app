import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSagas from "./rootSagas";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const logger = (createLogger as any)({
  collapsed: true,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
    }).concat(logger),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSagas)

export default store;