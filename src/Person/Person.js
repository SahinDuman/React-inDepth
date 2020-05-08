import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
margin: 16px auto;
padding: 16px;

@media (min-width: 500px) {
  width: 450px;
}
`

const person = props => {



  return (
    //<div className="Person">
    <StyledDiv>
      <p onClick={props.click} > My name is {props.name} and I am {props.age} years old</p>
      <p>My hobbies are: {props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </StyledDiv>)
}

export default person;