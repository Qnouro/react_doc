import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterVal, setFilterVal] = useState('')


  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const addPerson = (event) => {
    event.preventDefault()

    if (newName === ""){
      return
    }
    if (persons.find(p => p.name === newName)){
      alert(`${newName} already exists in the phonebook!`)
    } else {
      setPersons(persons.concat({
                                  name: newName,
                                  number: newPhone
                                })
                )
    }
    setNewName("")
    setNewPhone("")
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>

      <Filter filterVal={filterVal} setFilterVal={setFilterVal}/>

      <h2>Phonebook</h2>
      
      <PersonForm newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} addPerson={addPerson}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filterVal={filterVal}/>

    </div>
  )
}

export default App