import React from "react";


const PersonForm = ({newName, setNewName, newPhone, setNewPhone, addPerson}) => {
    return (
      <form onSubmit={addPerson}>

        <div>
          name: <input value={newName} onChange={(event) => {setNewName(event.target.value)}}/> <br/>
          number: <input value={newPhone} onChange={(event) => {setNewPhone(event.target.value)}}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
    )
}

export default PersonForm