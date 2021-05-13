// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Issues from './components/issues/issues.component';

const App = () => (
  <div>
    <Header />
    <Issues />
    <Footer />
  </div>
);

export default App;
