import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ( {children} ) => {
    const allContexts =  useFirebase();
    const data = {
        allContexts
    }
    return (
        <AuthContext.Provider value={data.allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;