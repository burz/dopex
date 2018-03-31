import { browserHistory } from 'react-router'
import React from 'react'

class InternalLink extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    event.preventDefault()

    browserHistory.push(this.props.path)
  }

  render() {
    return(
      <a className={this.props.className} href={this.props.path} onClick={this.onClick}>
        {this.props.children}
      </a>
    )
  }
}

export default InternalLink
