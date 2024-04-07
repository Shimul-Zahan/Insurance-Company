import React, { createContext, useState } from 'react';

export const NavbarContext = createContext(null);

const NavbarContextProvider = ({ children }) => {
    const [instruction, setInstruction] = useState('home');

    return (
        <NavbarContext.Provider value={{ instruction, setInstruction }}>
            {children}
        </NavbarContext.Provider>
    );
}

export default NavbarContextProvider;
