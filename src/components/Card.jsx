import React from "react";

export default function Card({date,weather,temp}) {

  function intToDate(int) {
    const currentDate = new Date(int * 1000);
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const dateString = `${currentDayOfMonth}.${
      currentMonth + 1
    }.${currentYear}`;
    return dateString;
  }

  function today(){
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const todayString = `${currentDayOfMonth}.${
      currentMonth + 1
    }.${currentYear}`;
    return todayString;

  }

  function capitalize(str){
      const list = str.split(" ")
      const upperCased = list.map(item=>item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
      return upperCased
      
  }
  const [weatherData] = weather
  const fromTimeStamp = intToDate(date)
  
  return (
    <div className={today() === fromTimeStamp ? "card active" : "card"}>
      <h5>{fromTimeStamp}</h5>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt=""
      />
      <div>
        <h5>{capitalize(weatherData.description) == "Rain And Snow" ? "Karla Karışık Yağmur": capitalize(weatherData.description)}</h5>
        <h5 className="minDegree">{Math.round(temp.min)} °C</h5>
        <h5 className="maxDegree">{Math.round(temp.max)} °C</h5>
      </div>
    </div>
  );
}
