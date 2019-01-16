import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './redux'
import {Provider} from 'react-redux'
ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
Things to understand about a React Redux App
-Modules
-webpack
-npm commands
-dependencies
-components structure
-props
-state
-setState
-binding methods
-local state
-the store
-the reducer
-actions/action creators
-the provider
-connect function
-mapStateToProps
-mapDispatchToProps
-dispatching an action from a react component
*/