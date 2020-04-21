import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import {Provider, connect} from "react-redux";
import {audioReducer, actionAudio} from "./reducer/audioReducer";
import {indexReducer, actionIndex} from "./reducer/indexReducer";

const combin = combineReducers({
    audio: audioReducer,
    index: indexReducer
});

const store = createStore(combin);
console.log(store.getState());
const mapStateToProps = (state) => {
    return {
        audio: state.audio,
        inde: state.index
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addAudio: (input, type) => {
            switch (type) {
                case "audio":
                    return dispatch(actionAudio(input));
                case  "index":
                    return dispatch(actionIndex(input));
            }
        }
    }
};

const Con = connect(mapStateToProps, mapDispatchToProps)(App);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Con />
        </Provider>,
        document.getElementById('root')
    )
};

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
