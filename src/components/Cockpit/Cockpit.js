import React, {useEffect, } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  useEffect(() => {
    console.log('COCKPIT.JS: useEffect');

    const timer = setTimeout(() => {
      alert('SAVE DATA TO CLOUD');
    }, 1000);

    return () => {
      console.log('COCKPIT:JS: useEffect Cleanup');
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    console.log('COCKPIT.JS: useEffect 2');
    return () => {
    console.log('COCKPIT.JS: useEffect 2 cleanup');

    }
  })

  let assignedClasses = [];
  let btnClass = '';

  if(props.showPersons) btnClass = classes.Red;
  if (props.personsLength <= 2) assignedClasses.push(classes.red);
  if (props.personsLength <= 1) assignedClasses.push(classes.bold);


  return (
  <div className={classes.Cockpit}>
    <h1>Course Playground</h1>
    <p className={assignedClasses.join(' ')}>Random Paragraph</p>
    <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
  </div>
  );
}

export default React.memo(cockpit);