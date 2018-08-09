import React, {Component} from 'react';
import Details from './Details'

export default class Hog extends Component {
  //state - buttonClicked: false
  state = {buttonClicked: false}
  //when button is clicked, state changes to true
  clickHandler = () => {
    this.setState(prevState => {
      return {buttonClicked: !prevState.buttonClicked}
    })
  }

  render(){
    return (<div className="ui eight wide column" className="pigTile">
      <img src={this.props.image}></img>
      <h3>Name: {this.props.name}</h3>
      <button onClick={this.clickHandler}>Show details</button>
      {this.state.buttonClicked ? <Details details={this.props} /> : null}
    </div>)
  }
}
