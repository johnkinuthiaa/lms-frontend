"use client"
import {usePathname, useRouter} from "next/navigation";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {
    ArrowRight,
    BarChart,
    Book,
    CheckBox,
    Close,
    Dashboard,
    Logout,
    Person,
    School,
    Star
} from "@mui/icons-material";
import {useEffect, useState} from "react";

export default function Aside(){
    const pathname =usePathname()
    const router =useRouter()
    const [dashboardOpen,setOpenDashBoard] =useState<boolean>(true)
    useEffect(()=>{
        setOpenDashBoard(true)
    },[])

    return(
        <aside className={"flex flex-1/12 p-3 flex-col h-[100vh] border-r bg-blend-screen border-gray-600"}>
            <div className={"flex items-center justify-between"}>
                <div className={"text-xl font-bold"}>Lms</div>
                <button className={"cursor-pointer"}>
                    {dashboardOpen?<Close/>:<ArrowRight/>}
                </button>
            </div>
            <nav className={"mt-16 [&>div]:p-4 [&>div]:rounded-xl [&>div]:font-medium [&>div]:cursor-pointer [&>div]:mt-2 [&>div]:flex [&>div]:gap-3 [&>div]:align-center [&>div]:hover:bg-gray-700"}>
                <div
                    onClick={()=>router.push("/dashboard")}
                    className={`${pathname==="/dashboard"&&"bg-blue-500"}`}>
                    <Dashboard/>Dashboard
                </div>
                <div
                    onClick={()=>router.push("/dashboard/profile")}
                    className={`${pathname==="/dashboard/profile"&&"bg-blue-500"}`}>
                    <Person/>My profile
                </div>
                <div
                    onClick={()=>router.push("/dashboard/allCourses")}
                    className={`${pathname==="/dashboard/allCourses"&&"bg-blue-500"}`}>
                    <School/>All courses
                </div>
                <div
                    onClick={()=>router.push("/dashboard/myCourses")}
                    className={`${pathname==="/dashboard/myCourses"&&"bg-blue-500"}`}>
                    <Book/>Enrolled courses
                </div>
                <div
                    onClick={()=>router.push("/dashboard/reviews")}
                    className={`${pathname==="/dashboard/reviews"&&"bg-blue-500"}`}>
                    <Star/>Reviews
                </div>
                <div
                    onClick={()=>router.push("/dashboard/quizzes")}
                    className={`${pathname==="/dashboard/MyQuizzes"&&"bg-blue-500"}`}>
                    <BarChart/>My quizzes
                </div>
                <div
                    onClick={()=>router.push("/dashboard/orderHistory")}
                    className={`${pathname==="/dashboard/orderHistory"&&"bg-blue-500"}`}>
                    <CheckBox/>Order History
                </div>
                <div
                    onClick={()=>router.push("/dashboard/powerAi")}
                    className={`${pathname==="/dashboard/powerAi"&&"bg-blue-500"}`}>
                    <SmartToyIcon/>Chatgibiti wrapper
                </div>
                <div><Logout/>Logout</div>
            </nav>
        </aside>
    )
}