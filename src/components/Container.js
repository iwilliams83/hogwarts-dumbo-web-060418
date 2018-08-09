import React, { Component } from 'react';
import '../App.css';

import hogs from '../porkers_data';
import Hog from './Hog'


export default class Container extends Component {
  allHogs = hogs.map(hog => {
    return <Hog name={hog.name} specialty={hog.specialty}
    weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} />
  })
  render() {
    console.log(this)
    return (<div className="ui grid container"> {this.allHogs} </div>
    )
  }
}
