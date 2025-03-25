"use client"
import React, {createContext, useState} from "react";
import { useEffect } from "react";
import {useRouter} from "next/navigation"
type Auth ={
    auth:object|null
}
const AuthContext =createContext({})
export function AuthProvider({children,}: Readonly<{ children: React.ReactNode; }>){

    const [auth,setAuth] =useState<Auth>({auth: null})
    const router =useRouter()
    useEffect(()=>{
        if(typeof(sessionStorage.getItem("user")) ==="string"){
            const user =JSON.parse(sessionStorage.getItem("user") as string)
            setAuth(user)
        }else{
            setAuth({auth: null})
            router.push("/")
        }
        if(auth.auth==null){
            router.push("/")
        }
    },[])

    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
    </AuthContext.Provider>)

}
export default AuthContext