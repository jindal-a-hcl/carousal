import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Counter from './component/counter';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import PersonReducer from './store/personreducer';
import { Provider } from 'react-redux';
import Home from './component/home/home';
import Example from './component/carosuel/Example';
const rootreducer = combineReducers({
   pr : PersonReducer,
   re: reducer
});


const logger = store =>{
   return next => {
      return action => {
         console.log('Middleware dispatched', action,    next);
         const result = next(action);
          console.log('Middleware next state', store,store.getState(), 'result:', result);
         return result;
      }
   }
}

const store = createStore(rootreducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store = {store}>
    <Example />       
  </Provider>,
  document.getElementById('root')
);
//<Provider store = {store}>
 //   <Counter />
 // </Provider>,
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
