import {createStore,applyMiddleware, compose} from "redux";
import logger from 'redux-logger';
import Root from "../Reducers/Root";

const middleWares= [logger];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleWares),
    // other store enhancers if any
);

const store=createStore(Root,enhancer);
console.log(store.getState())
export default store;