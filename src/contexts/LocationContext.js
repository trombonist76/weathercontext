import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
    const [cities, setCities] = useState([])
    const [location, setLocation] = useState(localStorage.getItem("location") || "Kahramanmaraş")

    function setCityFromApi() {
        axios("https://www.senerov.com/projects/tr-il-ilce/js/il-ilce.json").then(result => setCities(result.data.data.map(city => city.il_adi)))
    }
    useEffect(() => {
        setCityFromApi()
    }, [])


    localStorage.setItem("location", location)

    const values = {
        cities,
        location,
        setLocation
    }
    return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>
}

export const useLocation = () => (useContext(LocationContext))


