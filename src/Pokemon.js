import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Pokemon () {
  const [numb, setNumb] = useState() 
  const [name, setName] = useState() 
  const [height, setHeight] = useState() 
  const [moves, setMoves] = useState()

  useEffect(() => {
    async function getPokemon () {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numb}`)
      console.log(res.data) 
      setName(res.data.name)
      setHeight(res.data.height)
      setMoves(res.data.moves.length)

    }
    getPokemon()
  })

  return (
    <div>
      Choose Your Pokemon
      <br />
   
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

      <h1>I am Pokemon number <span style={{ color: 'blue' }}> {numb}</span>. </h1>
      <h1>My name is {name}. </h1>
      <h1>My height is {height} inches </h1>
      <h1>I have {moves} moves. </h1>

    </div>
  )
}

export default Pokemon
