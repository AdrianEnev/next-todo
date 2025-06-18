// app/ClientRoot.tsx
'use client';

import getUserToken from '@src/hooks/users/getUserToken';
import logoutUser from '@src/hooks/users/logoutUser';
import { createContext, useContext, useEffect, useState } from 'react';
interface AuthContextType {
    isAuthenticated: boolean;
    onAuthenticate: any;
    logOut: any;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const getIsAuthenticated = async () => {
        const userToken = await getUserToken();
        if (userToken) {
            setIsAuthenticated(true);
            console.log('Is authenticated');
        }
    }

    const onAuthenticate = async () => {
        await getIsAuthenticated();
    };

    const logOut = async () => {
        await logoutUser();
        setIsAuthenticated(false);
    }

    useEffect(() => {
        getIsAuthenticated();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, onAuthenticate, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};