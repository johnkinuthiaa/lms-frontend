"use client"
import {useEffect} from "react"

interface ModuleContents {
    id:number,
    slug:string,
    title:string,
    content:string,
}
export default function ModuleContents(){
    const newUrl ="LINE"
    const changeUrl =()=>window?.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
    useEffect(()=>{
        changeUrl()
    },[])
    return(
        <div> i hope it works</div>
    )
}