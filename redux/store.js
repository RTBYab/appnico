const initialState = {};

// Imports: Dependencies
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { AsyncStorage } from "react-native";
// import setAuthToken from "../helper/setAuthToken";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const middleware = [thunk];
// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  //BlackList
  blacklist: ["alert"],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// // set up a store subscription listener
// // to store the users token in localStorage

// // prevent auth error on first run of subscription
// let currentState = {
//   auth: { token: null, isAuthenticated: null, loading: true, user: null },
// };

// store.subscribe(() => {
//   // keep track of the previous and current state to compare changes
//   let previousState = currentState;
//   currentState = store.getState();
//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const token = currentState.auth.token;
//     setAuthToken(token);
//   }
// });

// Exports
export { store, persistor };
