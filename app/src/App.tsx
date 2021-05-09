import React from 'react';
import { Provider } from 'urql';
import './App.css';
import Home from './Home/Home';
import client from './lib/api';
import AppHeader from './lib/components/AppHeader';

function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <AppHeader />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
