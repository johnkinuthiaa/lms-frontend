"use client"
import TopProfileCard from "@/components/topprofileCard";
import CourseInfoCard from "@/components/courseInfoCard";
import {useEffect, useState} from "react";
import CourseCard from "@/components/courseCard";

type CourseCardProps ={
    courseImage:string,
    id:string,
    category:string,
    price:number,
    description:string,
    title:string,
    instructorDetails:{
        username:string,
        profileImage:string
    }

}
export default function Dashboard(){
    const[userCourses,setUserCourses] =useState<CourseCardProps[]>([])
    const [userId,setUserId] =useState<number>(0)
    const fetchUserCourses =(async ()=>{
        try{
            const response =await fetch(`http://localhost:8080/api/v1/courses/get/${userId}/courses`,{
                method:"GET"
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode ===200){
                    setUserCourses(data?.courseList)
                }
            }
        }catch (e) {
            throw new Error(">>>"+e)
        }
    })
    useEffect(() => {
        const user =JSON.parse(sessionStorage?.getItem("user") as string)
        if(user !==null){
            setUserId(user?.id)
        }

    }, []);

    useEffect(()=>{
        if(userId !== 0){
           fetchUserCourses()
        }
    },[userId])

    return(
        <main className={"flex w-full p-2 flex-col scroll-smooth scroll"}>
            <div className={"flex justify-end content-end"}>
                <TopProfileCard/>
            </div>

            <div className={"flex flex-wrap mt-5 [&>*]:items-center [&>*]:gap-2 gap-2"}>
                <CourseInfoCard metrics={userCourses.length} text={"Enrolled courses"}/>
            </div>
            <div className={"flex flex-col-reverse lg:flex-row md:flex-row mt-10 md:mt-16 lg:mt-16  gap-2"}>
                <div className={"flex-col flex flex-3/5  lg:[&>*]:p-2 md:[&>*]:p-2 "}>
                    <div className={"lg:text-2xl text-xl font-bold content-center"}>My Courses</div>
                    <div className={"flex flex-col gap-2"}>
                        {userCourses.length>0?(
                            userCourses.map((course,index)=>(
                                <CourseCard
                                    key={index}
                                    courseImages={course.courseImage}
                                    id={course.id}
                                    category={course.category}
                                    price={course.price}
                                    description={course.description}
                                    title={course.title}
                                    instructorDetails={{
                                    username: course.instructorDetails.username,
                                    profileImage: course.instructorDetails.profileImage
                                }}/>
                            ))
                            ):(
                            <div className={"mt-5 flex flex-col items-center"}>
                                <div>
                                    User does not have any course enrolled!
                                    Navigate to all courses page to view and enroll
                                </div>
                                <button
                                    className={"sm:w-[60%] mt-10 gap-2  font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white" +
                                        " text-black flex justify-center items-center rounded cursor-pointer"}
                                >Available courses</button>


                            </div>
                        )}

                    </div>

                </div>
            </div>


        </main>
    )
}