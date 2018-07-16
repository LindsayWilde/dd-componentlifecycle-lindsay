import React, { Component } from 'react';
import Navigation from './navigation';
import PageContent from './page-content';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello there</h1>

        <Navigation />
        <PageContent/>
      </div>
    );
  }
}
