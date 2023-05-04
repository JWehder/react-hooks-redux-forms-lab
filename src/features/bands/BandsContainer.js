import React from "react";
import BandInput from "./BandInput";
import { useDispatch, useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities)

  const displayBands = bands.map((band, index) => {
    return <li key={index}>{band}</li>
  })

  function onBandSubmit(e, name, setName) {
    e.preventDefault()
    console.log(name)
    dispatch(bandAdded(name))
    setName("")
  }

  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit} />
      <ul>{displayBands}</ul>
    </div>
  )
}

export default BandsContainer;
