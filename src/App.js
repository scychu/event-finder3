import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes/Routes";
// import {Provider} from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes/>  
      </div>
    </BrowserRouter>
  );
}

export default App;
