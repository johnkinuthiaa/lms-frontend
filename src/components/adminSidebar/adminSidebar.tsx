export default function AdminSidebar(){
    return(
        <aside className={"mt-10 ml-2 border-r p-2 w-52 border-r-gray-700"}>
            <nav className={"flex flex-col gap-4 [&>*]:cursor-pointer"}>
                <div>Create Course</div>
                <div>Create Module</div>
                <div>Add lessons</div>
            </nav>
        </aside>
    )
}