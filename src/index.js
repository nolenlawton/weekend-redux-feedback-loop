import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// survey values
const survey = (state = {}, action) => {
// adds properties to survey object

    if(action.type === 'SET_FEELING'){
        return {...state,  feeling: action.payload}
    }

    if(action.type === 'SET_UNDERSTANDING'){
        return {...state,  understanding: action.payload}
    }

    if(action.type === 'SET_SUPPORT'){
        return {...state,  support: action.payload}
    }

    if(action.type === 'SET_COMMENTS'){
        return {...state, comments: action.payload}
    }
    return state
}

// all surveys from database
const surveyList = (state = [], action) => {
    if(action.type === 'SET_SURVEY_LIST') {
        return action.payload
    }
    return state
}

// store to hold reducers
const store = createStore(
    combineReducers({
        survey,
        surveyList
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
