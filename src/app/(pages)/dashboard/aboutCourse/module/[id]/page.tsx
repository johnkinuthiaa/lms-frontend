"use client"
import {use, useEffect, useState} from "react"
import LessonContents from "@/components/lessonContents";
import {Close} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';

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
    const[lessonId,setLessonId] =useState<string>("")
    const[writtenMaterial,setWrittenMaterial] =useState(allLessonsInModule[0]?.content)
    const[showSideBar,setShowSideBar] =useState(false)


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
        <div className={"lg:w-[70%] w-full mt-2 lg:mt-10 md:mt-10 items-center justify-center lg:m-auto h-full"}>
            <div className={"flex justify-end items-center w-full"}>
                <button
                    className={"cursor-pointer"}
                    onClick={()=>{
                    setShowSideBar(!showSideBar)
                }}>{showSideBar?<Close/>:<MenuIcon/>}</button>
            </div>
            {fetched &&
                <div className={"relative flex w-full h-[95vh] justify-center"}>
                    <div className={"h-[90vh]"}>
                        <LessonContents
                            id={lessonId}
                            slug={allLessonsInModule[0]?.slug}
                            title={title}
                            content={writtenMaterial}/>
                    </div>
                    {showSideBar&&<aside className={`h-[90vh]  absolute z-[999] mt-10 opacity-100 p-4 border 
                     rounded border-gray-400 bg-black w-52  right-0 shadow-xl`}>
                        <p className={"font-bold text-xl"}>All lessons</p>
                            {allLessonsInModule?.map((lesson,index)=>(
                                <div
                                    key={index}
                                    className={"cursor-pointer mb-2 mt-2 font-medium"}
                                    onClick={()=>{
                                        setLessonId(lesson?.id)
                                        setTitle(lesson?.title)
                                        setWrittenMaterial(lesson?.content)
                                        setShowSideBar(false)
                                    }}>{lesson.title}</div>
                            ))}
                        </aside>
                    }
                </div>

            }

        </div>
    )
}