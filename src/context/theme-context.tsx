import React, { createContext, useContext, useState } from 'react';
import { ThemeContextType } from '../types/theme-context-types';

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    // const [themeMode, setThemeMode] = useState('false');

    const setThemeMode = () => {
        return 'dark'   
    }

    return (<ThemeContext.Provider value={{ setThemeMode }}>{children}</ThemeContext.Provider>);

}

export default ThemeProvider
