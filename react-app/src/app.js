import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import './app.css';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

const App = hot(module)(Wrapper);

render (<App />, document.getElementById('root'));