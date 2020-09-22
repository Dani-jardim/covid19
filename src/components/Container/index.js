import React, {useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function Covid() {
  const [cases, setCases] = useState([]);
  const [countries, setCountries] = useState("BR");
  
  
  useEffect(
    
    () => {
      api.get(`countries/${countries}/confirmed`).then((response) => {

        setCases(response.data);
      });
    },[countries],[cases]);
    
  return (
    <div>
      <h3>Digite a sigla de um país: </h3>
      <div className="">
        <input onChange={(e) => setCountries (e.target.value)} placeholder="digite aqui"></input>
      </div>
      {cases.map((caso) => (
        
      <div class="" key={caso.uid} className="">
        <div class="">
          <h2>{caso.provinceState}:</h2>
          <p>Casos confirmados: {caso.confirmed}</p>
          <p>Recuparados: {caso.recovered}</p>
          <p>Mortes: {caso.deaths}</p>
        </div>
      </div>
    ))}
    </div>
  );
}