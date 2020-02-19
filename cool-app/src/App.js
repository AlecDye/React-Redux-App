import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { comicReducer as reducer } from './reducers/comicReducer'

import ComicForm from './components/ComicForm';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Today's XKCD</h1>
        <ComicForm />
      </div>
    </Provider>
  );
}

export default App;

//? xkcd comic API (current comic) - http://xkcd.com/info.0.json
//? xkcd comic API (comic by id #) - http://xkcd.com/614/info.0.json (id #: 614)