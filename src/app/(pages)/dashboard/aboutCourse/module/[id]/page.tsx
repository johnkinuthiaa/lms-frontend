"use client"
import {use, useEffect, useState} from "react"
import LessonContents from "@/components/lessonContents";

interface ModuleContents {
    id:string,
    slug:string,
    title:string,
    content:string,
}
export default function ModuleContents({ params }: { params: Promise<{ id: string }> }){

    const {id} =use(params)
    const [newUrl,setNewUrl] =useState<string>("/lessons")
    const changeUrl =()=>window?.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
    const ALL_LESSONS_URL =`http://localhost:8080/api/v1/lessons/all-in/${id}`
    const[allLessonsInModule,setAllLessonsInModule] =useState<ModuleContents[]>([])
    useEffect(()=>{
        fetchAllLessonsInModule()
        changeUrl()
    },[])
    const fetchAllLessonsInModule =(async ()=>{
        if(!id){
            return
        }
        try{
            const response =await fetch(ALL_LESSONS_URL)
            if(response.ok){
                const data =await response.json()

                if(data.statusCode ===200){
                    setAllLessonsInModule(data?.lessons)
                    setNewUrl(data.moduleSlug)
                    console.log(data.moduleSlug)
                }else{
                    console.log(data.message)
                }

            }else{
                console.log("error fetching data")
            }
        }catch (e) {
            throw new Error(e+"<<fix me")
        }
    })
    return(
        <div>
            <LessonContents
                id={allLessonsInModule[0].id}
                slug={allLessonsInModule[0].slug}
                title={allLessonsInModule[0].title}
                content={allLessonsInModule[3].content}/>
        </div>
    )
}