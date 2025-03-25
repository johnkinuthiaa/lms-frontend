"use client"
import AdminSidebar from "@/components/adminSidebar/adminSidebar";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

type UserInfo={
    role:string
    email:string
}

export default function AdminLayout({children,}: Readonly<{
    children: React.ReactNode;
}>){
    const[roles,setRole] =useState<string>("")
    const router =useRouter()
    useEffect(() => {
        const userInfo:UserInfo =JSON.parse(sessionStorage.getItem("user") as string)
        console.log(userInfo?.email)
        // setRole(userInfo?.role)
        console.log(userInfo?.role)
        if(userInfo?.role ==="STUDENT"){
            router.push("/")
        }
        // if(typeof(sessionStorage?.getItem("user")) ==="string"){
        //
        // }else{
        //     router.push("/")
        // }
    }, []);
    return(
        <main className={"flex gap-2 h-full"}>
            <AdminSidebar/>
            {children}
        </main>
    )
}