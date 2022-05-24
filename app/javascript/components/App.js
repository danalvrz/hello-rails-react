import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/greetings/configStore';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;