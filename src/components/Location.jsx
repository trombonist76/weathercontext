import React from "react";
import { useLocation } from "../contexts/LocationContext";

export default function Location() {
  const { cities, location, setLocation } = useLocation();
  function handleChange(e){
    setLocation(e.target.value)
  }
  return (
    <div className="location">
      <select className="dropdown" onChange={handleChange} name="cars" id="cars" value={location}>
        {cities.map((city,i)=>(<option key={i} value={city}>{city}</option>))}
      </select>
    </div>
  );
}
