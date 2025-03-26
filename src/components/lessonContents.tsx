type LessonContentsProps ={
    id:string,
    slug:string,
    title:string,
    content:string,
}
export default function LessonContents({id,title,content}:LessonContentsProps){
    const tile =document.getElementById("title")
    if(tile !=null &&content !=null){
        tile.innerHTML =content
    }
    return(
        <main id={id} className={"flex flex-col lg:w-[80%] md:w-[80%] w-full  m-[2px auto] justify-center items-center "}>
            <div className={"font-bold text-xl mb-4  text-center"}>{title}</div>
            <div className={"w-full  p-2 rounded-xl border h-full  border-gray-700"}>
                <section id={"title"} className={"leading-7  w-full p-2"}></section>
            </div>
        </main>
    )

}