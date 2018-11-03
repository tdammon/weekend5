import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const reducer = (state={feeling: '', understand: '', support: '', comments: ''}, action) => {
    console.log('in reducer');
    if(action.type ==='SET_FEELING'){
        state.feeling = action.payload.feeling;
    } else if(action.type ==='SET_UNDERSTAND'){
        state.understand = action.payload.understand;
    } else if(action.type ==='SET_SUPPORT'){
        state.support = action.payload.support;
    } else if(action.type ==='SET_COMMENTS'){
        state.comments = action.payload.comments;
    }
    console.log(state)
    return state;
}

const storeInstance = createStore(
    combineReducers({
        reducer
    }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={ storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
