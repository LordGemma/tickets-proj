import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Layout from './Layout';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
