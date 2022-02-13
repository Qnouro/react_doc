import React, { useEffect, useState} from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterVal, setFilterVal] = useState('')
  const [info, setInfo] = useState('')
  const [error, setError] = useState('')

  const infoStyle={
    color: "green"
  }
  const errorStyle={
    color: "red"
  }


  useEffect(() => {
    personService
      .getData()
      .then(data => {
        setPersons(data)
      })
  }, [])


  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const addPerson = (event) => {
    event.preventDefault()

    if (newName === ""){
      return
    }
    if (persons.find(p => p.name === newName)){
      alert(`${newName} already exists in the phonebook!`)
    } else {
      const person = {
                      name: newName,
                      number: newPhone
                      }
      personService
        .newNumber(person)
        .then(person => {
          setPersons(persons.concat(person))          
        })
    }
    setNewName("")
    setNewPhone("")
    setInfo(`${newName} has successfully been added to the database.`)
    setTimeout(() => {
      setInfo(null)
    }, 2000)
  }


  function Info(){
    if (info){
      return <h1 style={infoStyle}>{info}</h1>
    }
    if (error){
      return <h1 style={errorStyle}>{error}</h1>
    }
    return <></>
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <Info/>
      <Filter filterVal={filterVal} setFilterVal={setFilterVal}/>

      <h2>Phonebook</h2>
      
      <PersonForm newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} addPerson={addPerson}/>

      <h2>Numbers</h2>
      <Persons setPersons={setPersons} persons={persons} filterVal={filterVal} setError={setError}/>

    </div>
  )
}

export default App