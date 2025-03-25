"use client"
import Aside from "@/components/aside";
import AuthContext from "@/context/authProvider";
import { useContext } from "react";


export default function DashBoardLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {

    const auth =useContext(AuthContext)
    if(auth ==null){
        // window.location.replace("/")
        return
    }
    return (
        <main className={"flex [&>*]:p-4"}>
            <div className={"fixed"}>
                <Aside/>
            </div>
            <div className={"flex w-[80%] mt-2 ml-56 "}>
                {children}
            </div>

        </main>
    );
}