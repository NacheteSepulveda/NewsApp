import React from 'react'
import { createContext, useState } from 'react'


export const UserContext = createContext();

export const UserProvider  = ({children}) => {

    const [theme, setTheme] = useState('light')
    const [userName, setUserName] = useState('user')

    const toggleTheme = () => {
        setTheme ((theme === 'light' ? 'dark' : 'light'));
    }

return (
    <UserContext.Provider
    value={{theme,
            setTheme,
            userName,
            setUserName,
            toggleTheme
    }}
    >
        {children}
    </UserContext.Provider>
    )
    
}
export default UserContext

  
