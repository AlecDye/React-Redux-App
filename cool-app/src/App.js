import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { comicReducer as reducer } from './reducers/comicReducer'

import ComicForm from './components/ComicForm';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComicForm />
      </div>
    </Provider>
  );
}

export default App;

//? xkcd comic API (current comic) - http://xkcd.com/info.0.json
//? xkcd comic API (comic by id #) - http://xkcd.com/614/info.0.json (id #: 614)