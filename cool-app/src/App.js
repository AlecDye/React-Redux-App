import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { comicReducer as reducer } from './reducers/comicReducer'

import ComicForm from './components/ComicForm';
import ComicList from './components/ComicList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <a href="https://xkcd.com/"><h1>xkcd Extract</h1></a>
          <p>⬆ visit xkcd.com</p>
          <ComicForm />
        </header>
        <ComicList />
      </div>
    </Provider>
  );
}

export default App;

//? xkcd comic API (current comic) - http://xkcd.com/info.0.json
//? xkcd comic API (comic by id #) - http://xkcd.com/614/info.0.json (id #: 614)