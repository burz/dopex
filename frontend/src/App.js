import React from 'react'
import { render } from 'react-dom'

import './App.css'

class App extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App
