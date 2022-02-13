import React from "react";


const Course = ({course}) => {
      return (
            <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
            </div>
        )
    }

const Header = ({name}) => {
  return (
    <div>
        <h1>Course: {name}</h1>
    </div>
  )
}


const Content = ({course}) => {
  return (
    <>
     {course.parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises}/>)}
    </>
  )
}


function Part({name, exercise}){
  return (
    <p>
        {name}: {exercise}
    </p>
  )
}


function Total({course}){
  const total = course.parts.reduce((sumSoFar, element) => sumSoFar + element.exercises, 0)
  return (
    <>
      <p>
        Number of exercises {total}
      </p>
    </>
  )
}

export default Course