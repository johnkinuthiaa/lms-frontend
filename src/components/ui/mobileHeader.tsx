"use client"
import {Close} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import{useState} from "react"
import Aside from "@/components/aside";

export default function MobileHeader(){
    const[showSideBar,setShowSideBar] =useState<boolean>(false)

    return(
        <>
            <header>
                <div className={"flex justify-between"}>
                    <h1>Lms</h1>
                    <button
                        className={"cursor-pointer"}
                        onClick={()=>{
                            setShowSideBar(!showSideBar)
                        }}>{showSideBar?<Close/>:<MenuIcon/>}</button>
                </div>
            </header>
            {showSideBar&&
                <div className={"w-[80%]"}
                     onClick={()=>setShowSideBar(false)}
                >
                    <Aside/>
                </div>
            }
        </>

    )}