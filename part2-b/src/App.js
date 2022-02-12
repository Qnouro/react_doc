import React, { useEffect, useState} from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterVal, setFilterVal] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data)
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