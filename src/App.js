import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
