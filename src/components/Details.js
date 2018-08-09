import React, { Component } from 'react';
import '../App.css';


export default class Details extends Component {
  render(){
    const hog = this.props.details

    return(
          <div>
              <ul>
                <li>Specialty: {hog.specialty}</li>
                <li>Weight: {hog.weight}</li>
                <li>Medal: {hog.medal}</li>
              </ul>
          </div>
        )
  }
}
