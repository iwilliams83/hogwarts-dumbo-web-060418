import React, { Component } from 'react';
import '../App.css';

import hogs from '../porkers_data';
import Hog from './Hog'


export default class Container extends Component {

  slugName = (str) => {
    str = str.toLowerCase();
		str = str.replace(/\s+/g, '_')

		return str;
  }

  allHogs = hogs.map(hog => {
    return <Hog key={hog.name} name={hog.name} specialty={hog.specialty}
    weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} medal={hog['highest medal achieved']}
  image={require(`../hog-imgs/${this.slugName(hog.name)}.jpg`)}/>
  })
  render() {
    return (<div className="ui grid container"> {this.allHogs} </div>
    )
  }
}
