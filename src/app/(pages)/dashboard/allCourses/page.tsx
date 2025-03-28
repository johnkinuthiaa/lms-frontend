"use client"
import CourseCard from "@/components/courseCard";
import {useState,useEffect} from "react";

type CourseParams ={
    id:string,
    title:string,
    description:string
    price:number,
    createdOn:string,
    slug:string,
    courseImage:string,
    category:string,
    instructorDetails:{
        username:string,
        profileImage:string
    }
}
export default function AllCourses(){
    const [courseList,setCourseList] =useState<CourseParams[]>([])
    const[message,setMessage] =useState<string>("")

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    useEffect(()=>{
        fetchAllCourses()
    },[])

    async function fetchAllCourses(){
        const fetchCourseUrl ="http://localhost:8080/api/v1/courses/all"
        try{
            const response =await fetch(fetchCourseUrl,{
                method:"GET",
                headers:myHeaders
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    setMessage(data?.message)
                }
                setCourseList(data?.courseList)
            }
        }
        catch (e){
            throw new Error(">>"+e)
        }


    }
    return(
        <main className={"m-auto flex flex-col w-full p-2"}>
            <div className={"text-xl font-bold mt-10"}>All our courses</div>
            {message}
            <section className={"flex lg:flex-wrap md:flex-row lg:flex-row  md:flex-wrap flex-col mt-4"}>
                {courseList?.map((course,index)=>(
                    <CourseCard
                        key={index}
                        id={course.id}
                        category={course.category}
                        price={course.price}
                        description={course.description}
                        title={course.title}
                        courseImages={course.courseImage}
                        instructorDetails={{
                        username: course.instructorDetails.username,
                        profileImage: course.instructorDetails.profileImage
                    }} />
                ))}
            </section>
        </main>
    )
}