import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme")||"light")
    localStorage.setItem("theme",theme)
    
    const values = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = () => (
    useContext(ThemeContext)
)
