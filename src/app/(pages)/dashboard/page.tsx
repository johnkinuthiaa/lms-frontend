import TopProfileCard from "@/components/topprofileCard";


import CourseInfoCard from "@/components/courseInfoCard";
import AllCourses from "@/app/(pages)/dashboard/allCourses/page";

export default function Dashboard(){
    return(
        <main className={"flex w-full p-2 flex-col scroll-smooth scroll dashboard"}>
            <div className={"flex justify-end content-end"}>
                <TopProfileCard/>
            </div>

            <div className={"flex flex-wrap mt-5 [&>*]:items-center [&>*]:gap-2 gap-2"}>
                <CourseInfoCard metrics={2} text={"Active courses"} icon={"<Book/>"}/>
            </div>
            <div className={"flex mt-16  gap-2"}>
                <div className={"flex-col flex flex-3/5  [&>*]:p-2 "}>
                    <div className={"text-2xl font-bold content-center"}>My Courses</div>
                    <div className={"flex flex-col gap-2"}>
                        <AllCourses/>
                    </div>

                </div>
                <div className={"flex-2/5 border-gray-600 border"}>
                    Active courses
                </div>
            </div>


        </main>
    )
}