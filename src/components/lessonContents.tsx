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
        <main id={id} className={"flex flex-col w-[80%] m-[0 auto] justify-center items-center "}>
            <div className={"font-bold text-xl text-center"}>{title}</div>
            <div className={" max-w-[1000px] min-w-[900px] p-2 rounded-xl border min-h-[90vh] border-gray-700"}>
                <section id={"title"} className={"leading-7 p-2"}></section>
            </div>
        </main>
    )

}