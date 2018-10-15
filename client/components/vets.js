import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchVets} from '../store'

/**
 * COMPONENT
 */
// export const Vets = () => {
//   return (
//     <div>
//       <h3>Find a vet:</h3>
//     </div>
//   )
// }

class Vets extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVets()
  }
  render() {
    return <h1>all vets</h1>
  }
}

const mapStateToProps = state => ({
  vets: state.vets
})

const mapDispatchToProps = dispatch => ({
  fetchVets: () => {
    dispatch(fetchVets())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Vets)
