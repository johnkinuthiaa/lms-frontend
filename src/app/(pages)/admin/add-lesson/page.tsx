"use client"
import {useEffect, useState} from "react";
import Editor from "@/components/tinyMce/textEditor";

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

    useEffect(() => {

        const getAllCourses =(async ()=>{
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
        const getAllModules =(async ()=>{
            try{
                const response =await fetch(GET_ALL_MODULES,{
                    method:"GET"
                })
                if(response.ok){
                    const data =await response.json()
                    setAllModules(data?.modules)
                }
            }catch (e){
                throw new Error(e+"<>")
            }
        })
        getAllCourses()
        getAllModules()
        setUserId(1)
    }, []);

    const[lessonTitle,setLessonTitle] =useState<string>("")
    const [courseId,setCourseId] =useState<string>("");
    const [myModuleId,setModuleId] =useState<string>("");
    const[userId,setUserId]=useState<number>(1)
    // const[message,setMessage]=useState("")


    const[availableCourses,setAvailableCourses] =useState<Course[]>([])
    const[allModules,setAllModules] =useState<ModuleInfo[]>([])

    return(
        <main className={" flex flex-col w-[80%] m-[0 auto] mt-10 justify-center items-center"}>
            <div className={"font-bold text-2xl"}>Welcome ADMIN! Create a lesson for existing module</div>
            <form
                onSubmit={(e)=>{
                    e.preventDefault()
                }}

                className={"w-7/12 h-full [&>*>*]:w-full flex flex-col mt-10 gap-4 [&>*>*]:flex " +
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
                        required={true}

                        onChange={(e)=> {
                            setCourseId(e.target.value)
                            console.log(courseId)
                        }}>
                        {availableCourses.length>0&&
                            availableCourses.map((course,index)=>(
                                <option key={index} value={course.id}>{course.title}</option>
                            ))
                        }
                    </select>
                </fieldset>
                <fieldset>
                    <label>Select Module:</label>
                    <select
                        required={true}
                        onChange={(e)=> {
                            setModuleId(e.target.value)

                        }}>
                        {allModules.length>0&&allModules.map((module,index)=>(
                            <option key={index} value={module.id}>{module.title}</option>
                        ))}
                    </select>
                </fieldset>
            </form>
            <div className={"mt-4"}>
                {myModuleId !=""?(
                    <div>
                        <Editor
                            lessonTitle={lessonTitle}
                            moduleId={myModuleId}
                            courseId={courseId}
                            userId={userId} />
                    </div>
                ):(
                    <div>hii</div>
                )
                }

            </div>
        </main>
    )
}