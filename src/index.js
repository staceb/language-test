const css = require('./app.css')

import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> My Div </h1>
      </div>
    );
  }
}

ReactDOM.render(
  < App />,
  rootElement
);
