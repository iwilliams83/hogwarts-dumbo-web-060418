import React, {Component} from 'react';

export default class Hog extends Component {
  render(){
    return (<div className="ui eight wide column">
      <img src={this.props.image}></img>
      <h2>Name: {this.props.name}</h2>
      <p>Specialty: {this.props.specialty}</p>
      <p>{this.props.weight}</p>
      <p>{this.props.medal}</p>
    </div>)
  }
}
