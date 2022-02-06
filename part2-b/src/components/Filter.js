import React from "react";


const Filter = ({filterVal, setFilterVal}) => {
    return (
        <p>
        Search field: <input value={filterVal} onChange={(event) => {setFilterVal(event.target.value)}}/>
        </p>
    )
}

export default Filter