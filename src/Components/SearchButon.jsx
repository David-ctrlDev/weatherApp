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
      const celcius_grade = -272.15
      let temperature = data.main.temp +(celcius_grade)
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
