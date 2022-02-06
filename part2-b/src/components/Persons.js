import React from "react";


const Persons = ({persons, filterVal}) => {
    const filterDisplay = () => {
        const displayArr = persons.filter(p => p.name.toLowerCase().includes(filterVal))
        return (
          displayArr.map(p => <li key={p.name}>{p.name} - {p.number}</li>)
        )
      }
    return (
        <ul>
            {filterDisplay()}
        </ul>
    )
}

export default Persons