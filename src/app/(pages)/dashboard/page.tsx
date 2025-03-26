import TopProfileCard from "@/components/topprofileCard";


import CourseInfoCard from "@/components/courseInfoCard";

export default function Dashboard(){
    return(
        <main className={"flex w-full p-2 flex-col scroll-smooth scroll"}>
            <div className={"flex justify-end content-end"}>
                <TopProfileCard/>
            </div>

            <div className={"flex flex-wrap mt-5 [&>*]:items-center [&>*]:gap-2 gap-2"}>
                <CourseInfoCard metrics={2} text={"Active courses"} icon={"<Book/>"}/>
            </div>
            <div className={"flex flex-col-reverse lg:flex-row md:flex-row mt-4 md:mt-16 lg:mt-16  gap-2"}>
                <div className={"flex-col flex flex-3/5  lg:[&>*]:p-2 md:[&>*]:p-2 "}>
                    <div className={"lg:text-2xl text-xl font-medium content-center"}>My Courses</div>
                    <div className={"flex flex-col gap-2"}>
                        <div>items</div>
                        <div>items</div>
                        <div>items</div>
                        <div>items</div>
                        <div>items</div>
                        <div>items</div>
                        <div>items</div>
                        <div>items</div>
                    </div>

                </div>
                <div className={"flex-2/5 border-gray-600 border"}>
                    Active courses
                </div>
            </div>


        </main>
    )
}