import MarkdownToJsx from "@/components/editor";

type LessonContentsProps ={
    id:string,
    slug:string,
    title:string,
    content:string,
}
export default function LessonContents({id,title,content}:LessonContentsProps){
    return(
        <div id={id} className={"w-[80%] flex flex-col mt-10"}>
            <div className={"font-bold text-xl text-center"}>{title}</div>
            <div className={"mt-4"}>

                {content}
            </div>
            <MarkdownToJsx content={content}/>
        </div>
    )

}