"use client"
import React, {createContext, useState} from "react";

const AuthContext =createContext({})
export function AuthProvider({children,}: Readonly<{ children: React.ReactNode; }>){

    const [auth,setAuth] =useState(null)

    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
    </AuthContext.Provider>)

}
export default AuthContext