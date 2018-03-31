import DocumentTitle from 'react-document-title'
import InternalLink from './InternalLink'
import React from 'react'

class Home extends React.Component {
  render() {
    return(
      <DocumentTitle title="Home">
        <main className="container">
            Home!!
        </main>
      </DocumentTitle>
    )
  }
}

export default Home
