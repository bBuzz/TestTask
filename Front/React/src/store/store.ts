import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { testApi } from "../services/test";

const rootReducer = combineReducers({
  [testApi.reducerPath]: testApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(testApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
