"use client"
import {use, useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
type CourseParams ={
    id:string,
    title:string,
    description:string
    modulesInCourse:[{
        id:string,
        title:string,
        slug:string,
        moduleImage:string
        lessonsInModule:object[]
    }
    ],
    createdOn:string,
    slug:string
}
export default  function CourseInformation ({ params }: { params: Promise<{ id: string }> }) {
    const {id} =use(params)
    const COURSE_URL =`http://localhost:8080/api/v1/courses/${id}/get`
    const router =useRouter()

    const[course,setCourse]=useState<CourseParams>({
        createdOn: "",
        description: "",
        id: "",
        modulesInCourse: [{
            id: "", slug: "", title: "",
            moduleImage: "",
            lessonsInModule: []
        }],
        slug: "",
        title: ""
    })
    useEffect(()=>{
       fetchCourseById()
    },[])
    const fetchCourseById =(async ()=>{
        try{
            const response=await fetch(COURSE_URL,{
                method:"GET",
                cache:"force-cache"
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    console.log(data.message)
                    return
                }
                setCourse(data?.course)
            }
        }catch (e) {
            throw new Error("Error"+e)
        }
    })
    return(
        <div className={"w-[80%]"}>
            <div className={"w-[80%] m-[0 auto] flex flex-col justify-center items-center gap-2"} id={course?.id}>
                <div className={"font-bold mt-10"}>{course?.title}</div>
                <div className={"leading-7"}>{course?.description}</div>
            </div>
            <div className={"mt-10 font-bold"}>Modules in course:</div>
            <div className={"flex gap-2 w-full flex-wrap justify-between p-4 [&>*]:rounded-xl  [&>*]:border [&>*]:border-gray-700"}>
                {course?.modulesInCourse.map((mod,index:number)=>(
                    <div
                        key={index}
                        className={"h-96 cursor-pointer hover:shadow-2xl hover:translate-1"}
                        id={mod.id}>
                        <Image
                            src={"https://i.pinimg.com/736x/06/98/6a/06986a1609bd2fcbd8cb047c789738d0.jpg"}
                            height={100}
                            className={"w-full h-70 p-1 rounded-xl"}
                            width={100} alt={mod.title}>

                        </Image>
                        <div className={"font-bold mt-4 p-2"}>{mod.title}</div>
                    </div>
                ))}
            </div>

        </div>

    )

}