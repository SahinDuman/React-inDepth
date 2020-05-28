import React, { PureComponent } from 'react'
import Person from './Person/Person';

class Persons extends PureComponent {
  /*   static getDerivedStateFromProps(props, state) {
      console.log('PERSONS.JS: DerivedState', props);
      return state;
    } */

  componentWillReceiveProps(props) {
    console.log('PERSONS.JS: componentWillReceiveProps', props);
  }

/*   shouldComponentUpdate(nextProps, nextState) {
    console.log('PERSONS.JS: ShouldComponentUpdate', nextProps);
    if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
      return true
    } else {
      return false
    }
  } */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('PERSONS.JS SnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('PERSONS.JS componentDidUpdate');
  }


  componentWillUnmount() {
    console.log('PERSONS.JS: componentWillUnmount');
  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        change={(event) => this.props.changed(event, person.id)}
        click={() => this.props.clicked(index)} />
    })
  }
}

export default Persons;