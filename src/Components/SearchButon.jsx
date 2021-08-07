import React from 'react'
import apiFetch from '../functions/fetch'
import { useState } from 'react';



function SearchButon() {

    const [city, setcity] = useState("Nombre Ciudad");
    const [temp, settemp] = useState("");

    const handleClick = async ()=>{
       let data = await apiFetch()
       console.log(data);
      setcity(data.name);
      let temperature = data.main.temp -272.15
      settemp(temperature + "°C")
       
       return data 
    }

    return (
        <div>
            <button onClick={handleClick}>Buscar</button>
            <h1>{city}</h1>
            <h2>{temp}</h2>
        </div>
    )
}

export default SearchButon
