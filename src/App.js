import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes/Routes";
import store from './store/index';
import {Provider} from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
        <Routes/>  
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
