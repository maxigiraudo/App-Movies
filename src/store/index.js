import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";

// const composeEnchancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnchancers(applyMiddleware(thunk))
// );

// export default store;
