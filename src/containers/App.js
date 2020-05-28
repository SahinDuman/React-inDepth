import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP.JS CONSTRUCTOR');
  }
  state = {
    persons: [
      { id: '1', name: 'Sahin', age: '25' },
      { id: '2', name: 'Diler', age: '25' },
      { id: '3', name: 'Hogir', age: '27' }
    ],
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('APP.JS GETDERIVEDSTATE', props);
    return state
  }

  componentDidMount() {
    console.log(' app.js componentdidmount');
  }

  componentDidUpdate(){
    console.log('APP.JS componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('APP.JS shouldComponentUpdate');
    return true;
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons });

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    console.log('app.js render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (  
      <Aux>
        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length} 
          toggle={this.togglePersonsHandler}/> : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);