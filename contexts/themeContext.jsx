import { createContext, useState } from "react";

export const themeContext = createContext()

export function ThemeProvider({children}){
    const [isdark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return <themeContext.Provider value={[isdark, setIsDark]}>
        {children}
    </themeContext.Provider>
}