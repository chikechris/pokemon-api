import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Pokemon () {
  const [numb, setNumb] = useState()

  useEffect(() => {
    async function getPokemon () {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numb}`)
      console.log(res.data.name)
    }
    getPokemon()
  })

  return (
    <div>
      <h1>I am Pokemon number <span style={{ color: 'blue'}}> {numb}</span>. </h1>
      <h1>My name is {name}. </h1>
      <h1>My height is {height}inches </h1>
      <h1>I have {moves} moves. </h1>
      <select
        value={numb}
        onChange={e => {
          setNumb(e.target.value)
        }}
      >
        <option value='1'> 1 </option>
        <option value='3'> 3 </option>
        <option value='5'> 5 </option>
        <option value='6'> 6 </option>
        <option value='7'> 7 </option>
        <option value='8'> 8 </option>
      </select>
    </div>
  )
}

export default Pokemon
