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
                }
                setCourse(data?.course)
            }
        }catch (e) {
            throw new Error("Error"+e)
        }
    })
    return(
        <div className={"lg:w-[90%] md:w-[90%] w-full flex flex-col"}>
            <div className={"lg:w-[80%] md:w-[80%] w-full m-[0 auto] flex flex-col md:justify-center lg:justify-center items-center gap-2"} id={course?.id}>
                <div className={"font-bold text-xl mt-4 mb-4"}>{course?.title}</div>
                <div className={"leading-7 break-words"}>{course?.description}</div>
            </div>
            <div className={"mt-10 font-bold"}>Modules in course:</div>
            <div className={"flex w-full flex-wrap  gap-4  p-2 [&>*]:rounded-xl  [&>*]:border [&>*]:border-gray-700"}>
                {course?.modulesInCourse.map((mod,index:number)=>(
                    <div
                        key={index}
                        className={"h-96 cursor-pointer hover:shadow-2xl hover:translate-1"}
                        onClick={(e)=>{
                            e.preventDefault()
                            router.push(`/dashboard/aboutCourse/module/${mod.id}`)
                        }}
                        id={mod.id}>
                        <Image
                            src={"https://i.pinimg.com/736x/06/98/6a/06986a1609bd2fcbd8cb047c789738d0.jpg"}
                            height={1000}
                            className={"w-full h-70 p-1 rounded-xl"}
                            width={1000} alt={mod.title}>

                        </Image>
                        <div className={"font-bold mt-4 p-2"}>{mod.title}</div>
                    </div>
                ))}
            </div>

        </div>

    )

}