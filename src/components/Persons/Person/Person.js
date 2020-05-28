import React, { Component } from 'react';
import styled from 'styled-components';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';


class Person extends Component {
  render() {

    return (
      <Aux>
        <p onClick={this.props.click} > My name is {this.props.name} and I am {this.props.age} years old</p>
        <p>My hobbies are: {this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </Aux>)
  }
}

export default withClass(Person, classes.Person);