"use client"
import {useEffect, useState} from "react";
import Tinymc from "@/components/tinyMce/createLesson/tinymc";

type Course ={
    "id": number,
    "title": string,
}
type ModuleInfo={
    "id": number,
    "title": string,
}
export default function CreateLesson(){
    const GET_ALL_COURSES ="http://localhost:8080/api/v1/courses/all"
    const GET_ALL_MODULES ="http://localhost:8080/api/v1/modules/get-all"

    const[lessonTitle,setLessonTitle] =useState<string>("")
    const [courseId,setCourseId] =useState<string>("");
    const [moduleId,setModuleId] =useState<string>("");
    const[message,setMessage]=useState("")

    const[availableCourses,setAvailableCourses] =useState<Course[]>([])
    const[modules,setModules] =useState<ModuleInfo[]>([])
    useEffect(() => {
        getAvailableCourses()
        getAvailableModules()
    }, []);

    const getAvailableCourses =(async ()=>{
        try{
            const response =await fetch(GET_ALL_MODULES,{
                method:"GET"
            })
            if(response.ok){
                const data =await response.json()
                setAvailableCourses(data?.courseList)
            }
        }catch (e){
            throw new Error(e+"<>")
        }
    })
    const getAvailableModules =(async ()=>{
        try{
            const response =await fetch(GET_ALL_COURSES,{
                method:"GET"
            })
            if(response.ok){
                const data =await response.json()
                setModules(data?.modules)
            }
        }catch (e){
            throw new Error(e+"<>")
        }
    })
    const createLesson =(async ()=>{

    })
    return(
        <main className={" flex flex-col w-[80%] m-[0 auto] mt-10 justify-center items-center"}>
            <div className={"font-bold text-2xl"}>Welcome ADMIN! Create a lesson for existing module</div>
            <form
                onSubmit={(e)=>{
                    e.preventDefault()
                    createLesson()
                }}

                className={"w-7/12 [&>*>*]:w-full flex flex-col mt-10 gap-4 [&>*>*]:flex " +
                    " [&>*>input]:border [&>*>input]:p-2 [&>*>input]:rounded-xl [&>*>input]:outline-0" +
                    "[&>*>label]:font-bold  [&>*>label]:mt-2 [&>*>label]:mb-2" +
                    " [&>*>input]:border-gray-700 "+
                    " [&>*>*]:gap-2"}>

                <fieldset>
                    <label>Lesson Title:</label>
                    <input
                        type={"text"}
                        placeholder={"Enter course title..."}
                        required={true}
                        onChange={(e)=>setLessonTitle(e.target.value)}
                        min={4}/>
                </fieldset>
                <fieldset>
                    <label>Select course:</label>
                    <select
                        onChange={(e)=>setCourseId(e.target.value)}
                        required={true}
                    >
                        {availableCourses.map((course,index)=>(
                            <option key={index} value={course.id}>{course.title}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset>
                    <label>Select Module:</label>
                    <select
                        onChange={(e)=>setModuleId(e.target.value)}
                        required={true}
                    >
                        {modules.map((module,index)=>(
                            <option key={index} value={module.id}>{module.title}</option>
                        ))}
                    </select>
                </fieldset>

                <Tinymc courseId={courseId} moduleId={moduleId} title={lessonTitle}/>
                <button
                    type={"submit"}
                    className={"cursor-pointer font-bold rounded-xl p-2 bg-blue-500 w-fit hover:bg-blue-400 "}>create
                </button>
            </form>
        </main>
    )
}