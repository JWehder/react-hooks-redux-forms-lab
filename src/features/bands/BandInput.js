import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(e) => onBandSubmit(e, name, setName)}>
        <input label="name" type="text" value={name} onChange={handleChange} />
        <button type="submit">add band</button>
      </form>
    </div>
  )
}

export default BandInput;
