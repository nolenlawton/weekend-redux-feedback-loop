import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feeling = (state = [], action) => {
    if(action.type === 'SET_FEELING'){
        console.log(action.payload)
        return action.payload
    }
    return state
}

const understanding = (state = [], action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        console.log(action.payload)
        return action.payload
    }
    return state
}

const support = (state = [], action) => {
    if(action.type === 'SET_SUPPORT'){
        console.log(action.payload)
        return action.payload
    }
    return state
}

const comments = (state = [], action) => {
    if(action.type === 'SET_COMMENTS'){
        console.log(action.payload)
        return action.payload
    }
    return state
}

const surveyList = (state = [], action) => {
    if(action.type === 'SET_SURVEY_LIST') {
        return action.payload
    }
    return state
}

const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        surveyList
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
