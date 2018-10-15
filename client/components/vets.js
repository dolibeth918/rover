import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia
} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

import {fetchVets} from '../store'

const styles = {
  App: {
    display: 'flex',
    flexDirection: 'row'
  },
  Card: {
    marginRight: '24px',
    flex: '1',
    position: 'relative'
  },
  media: {
    height: 240
  }
}

class Vets extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVets()
  }
  render() {
    const {vets} = this.props
    return (
      <div className={this.props.classes.App}>
        {vets.length > 0 &&
          vets.map(vet => {
            return (
              <Card key={vet.id} className={this.props.classes.Card}>
                <CardContent>{vet.name}</CardContent>
                <CardMedia
                  className={this.props.classes.media}
                  image={vet.imgUrl}
                />
                <CardContent>{vet.address}</CardContent>
                <CardContent>{vet.phone}</CardContent>
              </Card>
            )
          })}
      </div>
    )
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

const vetsWithStyles = withStyles(styles)(Vets)

export default connect(mapStateToProps, mapDispatchToProps)(vetsWithStyles)