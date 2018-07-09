import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Mikagram</Link>
          {/* renders children element of Main.. that could be passend in reduxtagram.js */}
          {React.cloneElement(this.props.children, this.props)}
        </h1>
      </div>
    );
  }
}
