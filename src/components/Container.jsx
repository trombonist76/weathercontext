import React from "react";
import Weather from "./Weather";
import Location from "./Location";
import { useTheme } from "../contexts/ThemeContext"

export default function Container() {
  const {theme,setTheme} = useTheme()
  console.log(theme)
  return (
    <div className={`container ${theme}`}>
      <Location />
      <Weather />
    </div>
  );
}
