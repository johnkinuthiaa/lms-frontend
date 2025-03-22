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
    const ALL_LESSONS_URL =`http://localhost:8080/api/v1/lessons/all-in/${id}`
    const[allLessonsInModule,setAllLessonsInModule] =useState<ModuleContents[]>([])
    const[fetched,setFetched] =useState(false)
    const[title,setTitle] =useState<string>("")
    const[moduleId,setModuleId] =useState<string>("")
    const[writtenMaterial,setWrittenMaterial] =useState("")


    useEffect(()=>{
        fetchAllLessonsInModule().then(()=>{
            setFetched(true)
        })

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
        <div className={"w-full overflow-scroll"}>
            {fetched &&
                <div className={"flex w-full h-full m-[0 auto] justify-center"}>
                    <LessonContents
                        id={moduleId}
                        slug={allLessonsInModule[0]?.slug}
                        title={title}
                        content={writtenMaterial}/>
                    <aside className={"flex flex-col gap-4 overflow-scroll"}>
                        {allLessonsInModule?.map((lesson,index)=>(
                            <div
                                key={index}
                                className={"cursor-pointer"}
                                onClick={()=>{
                                    setModuleId(lesson?.id)
                                    setTitle(lesson?.title)
                                    setWrittenMaterial(lesson?.content)
                                }}>{lesson.title}</div>
                        ))}
                    </aside>
                </div>

            }

        </div>
    )
}