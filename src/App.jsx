// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Issues from './components/issues/issues.component';

const App = () => {
  const [scrollCount, setScrollCount] = useState(5);

  const setScroll = (state) => setScrollCount(state);

  return (
    <Provider store={store}>
      <Header />
      <Issues scrollCount={scrollCount} setScrollCount={setScroll} />
      <Footer scrollCount={scrollCount} setScrollCount={setScroll} />
    </Provider>
  );
};

export default App;
