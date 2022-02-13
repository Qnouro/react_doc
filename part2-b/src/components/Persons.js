import React from "react";
import personService from "../services/persons"


const Persons = ({setPersons, persons, filterVal, setError}) => {

    const deleteNumber = (person) => {

      if (window.confirm(`Delete ${person.name} from the phonebook?`)){

        personService
          .deleteNumber(person.id)
          .then(() => {
            const updatedPersons = persons.filter(p => p.id != person.id)
            setPersons(updatedPersons)
          })
          .catch(error => {
            setError(`${person.name} has already been removed.`)
            setTimeout(() => {
              setError(null)
              window.location.reload();
            }, 2000)
            
          })
        }
    }

    const filterDisplay = () => {
        const displayArr = persons.filter(p => p.name.toLowerCase().includes(filterVal))
        return (
          displayArr.map(p => <li key={p.name}>{p.name} - {p.number}   <button onClick={() => deleteNumber(p)}>Delete</button></li>)
        )
      }
    return (
        <ul>
            {filterDisplay()}
        </ul>
    )
}

export default Persons