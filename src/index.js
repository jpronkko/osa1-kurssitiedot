import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>)
}
const Content = (props) => {
  //console.log("Parts length:", props.parts.length)
  //console.log("part 0", props.parts[0].name)
  return (
    <div>
      {props.parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  const countTot = (total, current) => {
    return total + current.exercises
  }
  return (
    <div>
      <p>Number of exercises {props.parts.reduce(countTot, 0)}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

