import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "./auth/auth-reducers";
import tripsReducers from "./trips/trips-reducers";
import { bookings } from "./bookings/bookings-reducers";
import { isLoading, error, modal } from "./reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducers),
        trips: tripsReducers,
        bookings,
        isLoading,
        error,
        modal
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export {store, persistor};