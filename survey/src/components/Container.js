import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'

class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <>
        <div className="container-fluid">
            <div className="container card pt-2">
                <h1 className="text-center text-primary">Survey</h1>
            </div>
        </div>
        <Details />
        <Question />
      </>
    )
  }
}

export default Container