import React, {useState} from 'react'

const Delimiter = ({title}) => {
  return (
    <h1>
      <b>{title}</b>
    </h1>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
     {text}
    </button>
  )
}

const ButtonHolder = ({goodOnClick, neutralOnClick, badOnClick}) => {
  return (
    <>
    <Button text={"Good"} onClick={goodOnClick}/>
    <Button text={"Neutral"} onClick={neutralOnClick}/>
    <Button text={"Bad"} onClick={badOnClick}/>
    </>
  )
}

const StatsHolder = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average =  Math.round(100 * ((good + bad * (-1)) / 3)) / 100
  const positive = good === 0 ? 0 : Math.round(100*(100 * good / total)) /100

  if (Math.max(good, neutral, bad) === 0){
    return (
      <div>
        No feedback received yet!
      </div>
    )
  }

  return (
    <div>
      Good: {good} <br/>
      neutral: {neutral} <br/>
      bad: {bad} <br/>
      Total: {total} <br/>
      Average: {average} <br />
      Positive: {positive}%
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrGood = () => setGood(good + 1)
  const incrNeutral = () => setNeutral(neutral + 1)
  const incrBad = () => setBad(bad + 1)

  return <div>
    <Delimiter title={"Give feedback!"}/>
    <ButtonHolder goodOnClick={incrGood} neutralOnClick={incrNeutral} badOnClick={incrBad}/>
    <Delimiter title={"Statistics"}/>
    <StatsHolder good={good} neutral={neutral} bad={bad} />
  </div>
}

export default App