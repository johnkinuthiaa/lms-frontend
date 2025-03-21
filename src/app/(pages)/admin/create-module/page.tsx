"use client"
import {useEffect, useState} from "react"

type Course ={
    "id": number,
    "title": string,

}
export default function CreateModule(){
    const[moduleTitle,setModuleTitle] =useState<string>()
    const[moduleImage,setModuleImage] =useState<string>()
    const[availableCourses,setAvailableCourses] =useState<Course[]>([])
    const[message,setMessage]=useState("")
    const [courseId,setCourseId] =useState<string>("");
    const GET_ALL_COURSES ="http://localhost:8080/api/v1/courses/all"
    const CREATE_MODULE =`http://localhost:8080/api/v1/modules/1/new-module?courseId=${courseId}`

    useEffect(() => {
        getAvailableCourses()
    }, []);

    const getAvailableCourses =(async ()=>{
        try{
            const response =await fetch(GET_ALL_COURSES,{
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
    const createNewModule =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch(CREATE_MODULE,{
                method:"PUT",
                headers:myHeaders,
                body:JSON.stringify({
                    title:moduleTitle,
                    moduleImage:moduleImage
                })
            })
            if(response.ok){
                const data =await response.json()
                setMessage(data?.message)
            }
        }catch (e){
            setMessage(e+"<>")
        }
    })
    return(
        <main className={"flex flex-col w-[80%] m-[0 auto] mt-10 justify-center items-center"}>
            <div className={"font-bold text-2xl"}>Create a module for an existing Course</div>
            {message}
            <form
            onSubmit={(e)=>{
                e.preventDefault()
                createNewModule()
            }}
            className={"w-7/12 [&>*>*]:w-full flex flex-col mt-10 gap-4 [&>*>*]:flex " +
            " [&>*>input]:border [&>*>input]:p-2 [&>*>input]:rounded-xl [&>*>input]:outline-0" +
            "[&>*>label]:font-bold  [&>*>label]:mt-2 [&>*>label]:mb-2" +
            " [&>*>input]:border-gray-700 "+
            " [&>*>*]:gap-2"}>
            <fieldset>
                <label>Module Title:</label>
                <input
                    type={"text"}
                    placeholder={"Enter course title..."}
                    required={true}
                    onChange={(e)=>setModuleTitle(e.target.value)}
                    min={4}/>
            </fieldset>
            <fieldset>
                <label>Module Image Url:</label>
                <input type={"url"}
                       placeholder={"Enter course category..."}
                       onChange={(e)=>setModuleImage(e.target.value)}
                       required={true} min={4}/>
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
            <button
                type={"submit"}
                className={"cursor-pointer font-bold rounded-xl p-2 bg-blue-500 w-fit hover:bg-blue-400 "}>create
            </button>
        </form>

        </main>
    )
}