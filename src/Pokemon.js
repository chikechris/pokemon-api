import React, {useState, useEffect} from 'react' 
import axios from 'axios' 

function Pokemon() { 
  const [numb, setNumb] = useState() 

  useEffect(() => {
    alert('hi')
  })


  return (
    <div>
    <h1>You selected {numb} value </h1>
      <select value={numb} onChange={(e)=> {
          setNumb(e.target.value)
      }}>
        <option value='1'> 1 </option>
        <option value='3'> 3 </option>
        <option value='5'> 5 </option> 
        <option value='6'> 6 </option> 
        <option value='7'> 7 </option>
      </select>
    </div>
  )
}

export default Pokemon
