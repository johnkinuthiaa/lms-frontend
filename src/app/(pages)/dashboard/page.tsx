import TopProfileCard from "@/components/topprofileCard";

import CourseCard from "@/components/courseCard";
import CourseInfoCard from "@/components/courseInfoCard";
import AllCourses from "@/app/(pages)/dashboard/allCourses/page";

export default function Dashboard(){
    return(
        <main className={"flex w-full p-2 flex-col scroll-smooth scroll dashboard"}>
            <div className={"flex justify-end content-end"}>
                <TopProfileCard
                    img={"https://i.pinimg.com/236x/be/38/78/be3878c34f93d1663a6e5f6af4b78e9c.jpg"}
                    name={"John kinuthi"}
                    role={"ADMIN"}/>
            </div>

            <div className={"flex flex-wrap mt-5 [&>*]:items-center [&>*]:gap-2 gap-2"}>
                {/*<CourseInfoCard metrics={4} text={"All the enrolled courses"} icon={<Book/>}/>*/}
                {/*<CourseInfoCard metrics={2} text={"Finished courses"} icon={<AutoStories/>}/>*/}
                {/*<CourseInfoCard metrics={2} text={"Active courses"} icon={<Book/>}/>*/}
                {/*<CourseInfoCard metrics={2} text={"Active courses"} icon={<Book/>}/>*/}
                {/*<CourseInfoCard metrics={2} text={"Active courses"} icon={<Book/>}/>*/}
                {/*<CourseInfoCard metrics={2} text={"Active courses"} icon={<Book/>}/>*/}
                {/*<CourseInfoCard metrics={2} text={"Active courses"} icon={<Book/>}/>*/}
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