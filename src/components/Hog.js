import React, {Component} from 'react';

export default class Hog extends Component {
  render(){
    return (<div className="ui eight wide column">
      <h1>{this.props.name}</h1>
      <p>{this.props.specialty}</p>
      <p>{this.props.weight}</p>
    </div>)
  }
}
