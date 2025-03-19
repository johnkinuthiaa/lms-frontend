"use client"
import {usePathname, useRouter} from "next/navigation";
import {
    ArrowRight,
    BarChart,
    Book,
    Bookmark,
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
        <aside className={"flex flex-1/12 flex-col h-[100vh] border-r border-gray-600"}>
            <div className={"flex items-center justify-between"}>
                <p>Main Page</p>
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
                <div><Logout/>Logout</div>
            </nav>
        </aside>
    )
}