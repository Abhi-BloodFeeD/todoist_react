import React from 'react';
import { Content } from './components/layouts/Content';
import {Header} from './components/layouts/Header'

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

