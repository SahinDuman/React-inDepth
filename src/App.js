import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Sahin', age: '25' },
      { id: '2', name: 'Diler', age: '25' },
      { id: '3', name: 'Hogir', age: '27' }
    ],
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              change={(event) => this.nameChangeHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (
      <div className="App">
        <h1>Course Playground</h1>
        <p className={classes.join(' ')}>Random Paragraph</p>
        <button className="button" alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}


export default App;
